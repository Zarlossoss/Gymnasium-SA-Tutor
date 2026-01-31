
import React, { useState, useEffect } from 'react';
import { GradeSelection, SubjectSelection } from './components/SelectionScreens';
import { TopicTimeline } from './components/TopicTimeline';
import { DetailView } from './components/DetailView';
import { BookmarkList } from './components/BookmarkList';
import { AppState, GradeLevel, Subject, Topic, LearningContent, Bookmark } from './types';
import { fetchTopics, fetchContent } from './services/geminiService';
import { BookMarked, Home, ChevronRight } from 'lucide-react';

const BOOKMARK_STORAGE_KEY = 'gymnasium_sa_bookmarks';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    step: 'GRADE_SELECTION',
    selectedGrade: null,
    selectedSubject: null,
    selectedTopic: null,
    topics: [],
    currentContent: null,
    contentHistory: [],
    bookmarks: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const saved = localStorage.getItem(BOOKMARK_STORAGE_KEY);
    if (saved) {
      try {
        setState(prev => ({ ...prev, bookmarks: JSON.parse(saved) }));
      } catch (e) {
        console.error("Failed to parse bookmarks", e);
      }
    }
  }, []);

  const saveBookmarks = (bookmarks: Bookmark[]) => {
    localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(bookmarks));
    setState(prev => ({ ...prev, bookmarks }));
  };

  const handleToggleBookmark = () => {
    const { selectedGrade, selectedSubject, selectedTopic } = state;
    if (!selectedGrade || !selectedSubject || !selectedTopic) return;

    const exists = state.bookmarks.find(b => 
        b.gradeId === selectedGrade && 
        b.subject.id === selectedSubject.id && 
        b.topic.id === selectedTopic.id
    );

    if (exists) {
        saveBookmarks(state.bookmarks.filter(b => b.id !== exists.id));
    } else {
        const newBookmark: Bookmark = {
            id: Date.now().toString(),
            gradeId: selectedGrade,
            subject: selectedSubject,
            topic: selectedTopic,
            timestamp: Date.now()
        };
        saveBookmarks([...state.bookmarks, newBookmark]);
    }
  };

  const handleRemoveBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    saveBookmarks(state.bookmarks.filter(b => b.id !== id));
  };

  const handleGradeSelect = (grade: GradeLevel) => {
    setState((prev) => ({ ...prev, selectedGrade: grade, step: 'SUBJECT_SELECTION' }));
    window.scrollTo(0, 0);
  };

  const handleSubjectSelect = async (subject: Subject) => {
    setState((prev) => ({ ...prev, selectedSubject: subject, isLoading: true, error: null }));
    if (state.selectedGrade) {
      try {
        const topics = await fetchTopics(state.selectedGrade, subject.name);
        setState((prev) => ({
          ...prev,
          topics,
          isLoading: false,
          step: 'TOPIC_TIMELINE',
        }));
        window.scrollTo(0, 0);
      } catch (err) {
        setState(prev => ({ ...prev, isLoading: false, error: "Fehler beim Laden." }));
      }
    }
  };

  const handleTopicSelect = async (topic: Topic) => {
    setState((prev) => ({ 
        ...prev, 
        selectedTopic: topic, 
        isLoading: true, 
        error: null, 
        step: 'CONTENT_VIEW',
        contentHistory: []
    }));
    
    if (state.selectedGrade && state.selectedSubject) {
      try {
        const content = await fetchContent(state.selectedGrade, state.selectedSubject.name, topic.title);
        setState((prev) => ({ 
          ...prev, 
          currentContent: content,
          isLoading: false 
        }));
        window.scrollTo(0, 0);
      } catch (err) {
        setState(prev => ({ ...prev, isLoading: false, error: "Fehler beim Laden." }));
      }
    }
  };

  const handleInternalLink = async (term: string) => {
    if (!state.selectedGrade || !state.selectedSubject || !state.currentContent || !state.selectedTopic) return;
    const historyItem = { topic: state.selectedTopic, content: state.currentContent };
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const content = await fetchContent(state.selectedGrade, state.selectedSubject.name, term);
      setState(prev => ({
          ...prev,
          contentHistory: [...prev.contentHistory, historyItem],
          selectedTopic: { id: `term_${Date.now()}`, title: term, description: 'Vertiefungsthema' },
          currentContent: content,
          isLoading: false
      }));
      window.scrollTo(0, 0);
    } catch (err) {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const handleBookmarkSelect = async (bm: Bookmark) => {
      setState(prev => ({
          ...prev,
          selectedGrade: bm.gradeId,
          selectedSubject: bm.subject,
          selectedTopic: bm.topic,
          isLoading: true,
          step: 'CONTENT_VIEW',
          currentContent: null,
          contentHistory: [],
          error: null
      }));
      try {
        const content = await fetchContent(bm.gradeId, bm.subject.name, bm.topic.title);
        setState(prev => ({ ...prev, currentContent: content, isLoading: false }));
        window.scrollTo(0, 0);
      } catch (err) {
        setState(prev => ({ ...prev, isLoading: false }));
      }
  };

  const goBackToGrade = () => setState(prev => ({ ...prev, step: 'GRADE_SELECTION', selectedGrade: null }));
  const goBackToSubject = () => setState(prev => ({ ...prev, step: 'SUBJECT_SELECTION', selectedSubject: null, topics: [] }));
  const goBackToTopics = () => {
    if (state.contentHistory.length > 0) {
      const previous = state.contentHistory[state.contentHistory.length - 1];
      setState(prev => ({ ...prev, selectedTopic: previous.topic, currentContent: previous.content, contentHistory: prev.contentHistory.slice(0, -1) }));
    } else {
      setState(prev => ({ ...prev, step: 'TOPIC_TIMELINE', selectedTopic: null, currentContent: null }));
    }
    window.scrollTo(0, 0);
  };
  const goBackToHome = () => setState(prev => ({ ...prev, step: 'GRADE_SELECTION', selectedGrade: null, selectedSubject: null, selectedTopic: null, contentHistory: [] }));
  const navigateToGrade = () => setState(prev => ({ ...prev, step: 'SUBJECT_SELECTION', selectedSubject: null, topics: [] }));

  const isCurrentTopicBookmarked = !!(state.selectedGrade && state.selectedSubject && state.selectedTopic &&
      state.bookmarks.some(b => b.gradeId === state.selectedGrade && b.subject.id === state.selectedSubject?.id && b.topic.id === state.selectedTopic?.id));

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50 h-14 flex items-center px-4 sm:px-6">
         <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-1 overflow-hidden">
               <button onClick={goBackToHome} className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity flex items-center">
                    Gymnasium<span className="font-medium opacity-60 ml-0.5">SA</span>
               </button>

               <div className="hidden md:flex items-center text-xs font-medium text-gray-400 whitespace-nowrap ml-6 gap-2">
                   <button onClick={goBackToHome} className="hover:text-black transition-colors">Start</button>
                   {state.selectedGrade && (
                       <>
                           <ChevronRight className="w-3 h-3 text-gray-300" />
                           <button onClick={navigateToGrade} className="hover:text-black transition-colors">Klasse {state.selectedGrade}</button>
                       </>
                   )}
                   {state.selectedSubject && (
                       <>
                           <ChevronRight className="w-3 h-3 text-gray-300" />
                           <button onClick={goBackToSubject} className="hover:text-black transition-colors">{state.selectedSubject.name}</button>
                       </>
                   )}
               </div>
            </div>

            <div className="flex items-center gap-4">
               <button 
                 onClick={() => setState(prev => ({ ...prev, step: 'BOOKMARKS_VIEW' }))}
                 className="flex items-center text-gray-600 hover:text-black font-medium text-xs transition-colors py-1.5 px-3 rounded-full hover:bg-black/5"
               >
                 <BookMarked className="w-4 h-4 mr-1.5" />
                 <span>Lesezeichen</span>
                 {state.bookmarks.length > 0 && (
                     <span className="ml-1.5 bg-indigo-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                         {state.bookmarks.length}
                     </span>
                 )}
               </button>
            </div>
         </div>
      </header>

      <main className="pt-20 pb-12">
        {state.step === 'GRADE_SELECTION' && <GradeSelection onSelect={handleGradeSelect} />}
        {state.step === 'SUBJECT_SELECTION' && state.selectedGrade && <SubjectSelection grade={state.selectedGrade} onSelect={handleSubjectSelect} onBack={goBackToGrade} />}
        {state.step === 'TOPIC_TIMELINE' && state.selectedSubject && state.selectedGrade && <TopicTimeline topics={state.topics} subject={state.selectedSubject} grade={state.selectedGrade} onSelectTopic={handleTopicSelect} onBack={goBackToSubject} isLoading={state.isLoading} />}
        {state.step === 'CONTENT_VIEW' && state.selectedSubject && state.selectedTopic && state.selectedGrade && <DetailView content={state.currentContent} topic={state.selectedTopic} subject={state.selectedSubject} grade={state.selectedGrade} onBack={goBackToTopics} isLoading={state.isLoading} isBookmarked={isCurrentTopicBookmarked} onToggleBookmark={handleToggleBookmark} onInternalLinkClick={handleInternalLink} canGoBack={state.contentHistory.length > 0} />}
        {state.step === 'BOOKMARKS_VIEW' && <BookmarkList bookmarks={state.bookmarks} onSelectBookmark={handleBookmarkSelect} onRemoveBookmark={handleRemoveBookmark} onBack={goBackToHome} />}
      </main>
      
      <footer className="max-w-screen-xl mx-auto px-6 py-12 border-t border-gray-200 mt-12 text-gray-400 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2024 Gymnasium Sachsen-Anhalt KI-Tutor.</p>
        <div className="flex gap-6">
            <a href="#" className="hover:underline">Impressum</a>
            <a href="#" className="hover:underline">Datenschutz</a>
            <a href="#" className="hover:underline">Fachlehrpläne</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
