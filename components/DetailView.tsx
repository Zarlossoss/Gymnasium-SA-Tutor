
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { LearningContent, Topic, Subject, GradeLevel } from '../types';
import { ChevronLeft, ChevronDown, ChevronUp, Star, Download, Check, Lightbulb, Zap, HelpCircle, Send } from 'lucide-react';
import { askTutorQuestion } from '../services/geminiService';
import { saveOfflineContent, removeOfflineContent, isContentOffline } from '../services/storageService';

interface DetailViewProps {
  content: LearningContent | null;
  topic: Topic;
  subject: Subject;
  grade: GradeLevel;
  onBack: () => void;
  isLoading: boolean;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onInternalLinkClick?: (term: string) => void;
  canGoBack?: boolean;
}

const MarkdownRenderer = ({ content, onLinkClick, invert = false }: { content: string, onLinkClick?: (term: string) => void, invert?: boolean }) => {
  if (!content) return null;
  const cleanContent = content.replace(/\\n/g, '\n');
  
  return (
    <div className={invert ? "prose prose-invert prose-lg" : "prose prose-slate prose-lg lg:prose-xl"}>
      <ReactMarkdown 
          remarkPlugins={[remarkMath, remarkGfm]} 
          rehypePlugins={[rehypeKatex]}
          components={{
            a: ({ node, href, children, ...props }) => {
                if (href && href.startsWith('internal:')) {
                    const term = href.replace('internal:', '');
                    return (
                        <button 
                            onClick={() => onLinkClick && onLinkClick(term)}
                            className={`inline-flex items-center mx-1 px-2 py-0.5 rounded-lg font-bold transition-all text-sm align-baseline cursor-pointer ${invert ? 'bg-white/20 text-white hover:bg-white/40' : 'bg-black/5 text-black hover:bg-black/10'}`}
                        >
                            {children}
                        </button>
                    );
                }
                return <a href={href} {...props} target="_blank" rel="noopener noreferrer" className={`${invert ? 'text-blue-300 decoration-blue-400' : 'text-blue-700 decoration-blue-300'} font-bold underline underline-offset-4 hover:opacity-80 transition-opacity`}>{children}</a>;
            }
          }}
      >
          {cleanContent}
      </ReactMarkdown>
    </div>
  );
};

export const DetailView: React.FC<DetailViewProps> = ({ 
    content, topic, subject, grade, onBack, isLoading, isBookmarked, onToggleBookmark, onInternalLinkClick, canGoBack 
}) => {
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'qa'>('learn');
  const [openExercise, setOpenExercise] = useState<number | null>(null);
  const [isOfflineSaved, setIsOfflineSaved] = useState(false);
  const [question, setQuestion] = useState('');
  const [qaHistory, setQaHistory] = useState<{q: string, a: string}[]>([]);
  const [isAsking, setIsAsking] = useState(false);
  const chatScrollAreaRef = useRef<HTMLDivElement>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOfflineSaved(isContentOffline(grade, subject.name, topic.title));
  }, [topic, subject, grade]);

  // Verbessertes Scrolling für den Chat
  useEffect(() => {
    if (activeTab === 'qa' && chatBottomRef.current) {
        const timer = setTimeout(() => {
            chatBottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
        return () => clearTimeout(timer);
    }
  }, [qaHistory, activeTab, isAsking]);

  const handleAsk = async () => {
    if (!question.trim() || isAsking) return;
    const q = question;
    setQuestion('');
    setIsAsking(true);
    
    // Add user question with placeholder for answer
    setQaHistory(prev => [...prev, { q, a: '' }]);
    
    try {
      const a = await askTutorQuestion(grade, subject.name, topic.title, q);
      setQaHistory(prev => {
          const h = [...prev];
          if (h.length > 0) {
            h[h.length - 1].a = a;
          }
          return h;
      });
    } catch (err) {
      setQaHistory(prev => {
          const h = [...prev];
          if (h.length > 0) {
            h[h.length - 1].a = "Entschuldigung, es gab einen Fehler bei der Beantwortung. Bitte versuche es erneut.";
          }
          return h;
      });
    } finally {
      setIsAsking(false);
    }
  };

  const handleToggleOffline = () => {
    if (!content) return;
    if (isOfflineSaved) {
      removeOfflineContent(grade, subject.name, topic.title);
      setIsOfflineSaved(false);
    } else {
      saveOfflineContent(grade, subject.name, topic.title, content);
      setIsOfflineSaved(true);
    }
  };

  if (isLoading && !content) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-12 text-center animate-fade-in">
        <div className="w-12 h-12 border-2 border-gray-100 border-t-black rounded-full animate-spin mb-8"></div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Inhalt wird generiert.</h2>
        <p className="text-gray-400 font-medium max-w-sm">Didaktische Tiefenanalyse und Lehrplanabgleich...</p>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="max-w-screen-md mx-auto px-6 animate-slide-up pb-24 pt-8">
      {/* Action Bar */}
      <div className="flex items-center justify-between mb-12">
        <button onClick={onBack} className="text-gray-400 hover:text-black transition-colors flex items-center font-bold text-sm">
            <ChevronLeft className="w-4 h-4 mr-1" /> {canGoBack ? 'Zurück' : 'Alle Themen'}
        </button>
        <div className="flex gap-2">
            <button onClick={handleToggleOffline} className={`p-2.5 rounded-full transition-all ${isOfflineSaved ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>
                {isOfflineSaved ? <Check className="w-5 h-5" /> : <Download className="w-5 h-5" />}
            </button>
            <button onClick={onToggleBookmark} className={`p-2.5 rounded-full transition-all ${isBookmarked ? 'bg-amber-100 text-amber-500' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>
                <Star className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
            <span className={`px-4 py-1.5 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest ${subject.color}`}>
                {subject.name}
            </span>
            <span className="text-[11px] font-extrabold text-gray-300 uppercase tracking-widest">Gymnasium Sachsen-Anhalt</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-black tracking-tighter leading-[1.05] mb-10">
            {topic.title}
        </h1>
        <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500 rounded-full"></div>
            <div className="pl-8 text-xl sm:text-2xl text-slate-800 font-semibold leading-relaxed">
                <MarkdownRenderer content={content.level0} />
            </div>
        </div>
      </div>

      {/* iOS Segmented Control */}
      <div className="sticky top-16 z-40 mb-16 py-4 glass -mx-6 px-6 border-b border-gray-100/50">
        <div className="bg-gray-200/50 p-1.5 rounded-2xl flex max-w-md mx-auto border border-gray-100 shadow-sm">
            <button 
                onClick={() => setActiveTab('learn')}
                className={`flex-1 flex items-center justify-center py-3 rounded-xl text-xs font-extrabold transition-all ${activeTab === 'learn' ? 'bg-white shadow-md text-black' : 'text-gray-500 hover:text-black'}`}
            >
                Lernen
            </button>
            <button 
                onClick={() => setActiveTab('practice')}
                className={`flex-1 flex items-center justify-center py-3 rounded-xl text-xs font-extrabold transition-all ${activeTab === 'practice' ? 'bg-white shadow-md text-black' : 'text-gray-500 hover:text-black'}`}
            >
                Üben
            </button>
            <button 
                onClick={() => setActiveTab('qa')}
                className={`flex-1 flex items-center justify-center py-3 rounded-xl text-xs font-extrabold transition-all ${activeTab === 'qa' ? 'bg-white shadow-md text-black' : 'text-gray-500 hover:text-black'}`}
            >
                Fragen
            </button>
        </div>
      </div>

      <div className="space-y-24">
        {activeTab === 'learn' && (
            <>
                <section className="animate-fade-in">
                    <MarkdownRenderer content={content.guide} onLinkClick={onInternalLinkClick} />
                </section>

                <section className="bg-[#fff9e6] rounded-[3rem] p-10 sm:p-16 animate-fade-in border border-amber-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-200">
                            <Lightbulb className="w-7 h-7" />
                        </div>
                        <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Die Lehrer-Lücke.</h3>
                    </div>
                    <div className="font-medium leading-[1.7]">
                        <MarkdownRenderer content={content.teacherGap} onLinkClick={onInternalLinkClick} />
                    </div>
                </section>

                <section className="bg-slate-950 text-white rounded-[3rem] p-10 sm:p-16 animate-fade-in shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full -mr-40 -mt-40 blur-[100px]"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-white text-slate-950 flex items-center justify-center shadow-xl">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-extrabold tracking-tight">Mitarbeit-Boost.</h3>
                        </div>
                        <div className="font-medium leading-[1.7]">
                            <MarkdownRenderer content={content.participationBoost} onLinkClick={onInternalLinkClick} invert={true} />
                        </div>
                    </div>
                </section>
            </>
        )}

        {activeTab === 'practice' && (
            <div className="space-y-10 animate-fade-in">
                <div className="mb-14">
                    <h2 className="text-5xl font-extrabold tracking-tighter mb-4 text-black">Übungen.</h2>
                    <p className="text-xl text-slate-500 font-medium">10 Aufgaben von Basis bis Abitur-Niveau.</p>
                </div>
                {content.exercises.map((ex, i) => (
                    <div key={i} className="bg-white rounded-[2rem] p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500">
                        <div className="flex justify-between items-center mb-8">
                            <span className={`text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest ${ex.difficulty === 'Leicht' ? 'bg-emerald-100 text-emerald-800' : ex.difficulty === 'Mittel' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'}`}>
                                {ex.difficulty}
                            </span>
                            <span className="text-slate-300 font-extrabold text-xs">AUFGABE {i+1}</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 mb-10 tracking-tight leading-snug">
                            <MarkdownRenderer content={ex.question} />
                        </div>
                        <button 
                            onClick={() => setOpenExercise(openExercise === i ? null : i)}
                            className={`w-full flex items-center justify-between py-5 px-8 rounded-2xl font-extrabold text-sm transition-all border ${openExercise === i ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-white hover:border-slate-900'}`}
                        >
                            <span>{openExercise === i ? 'Lösung verbergen' : 'Lösung anzeigen'}</span>
                            {openExercise === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                        {openExercise === i && (
                            <div className="mt-10 px-2 animate-fade-in border-t border-slate-100 pt-10">
                                <div className="font-medium leading-relaxed">
                                    <MarkdownRenderer content={ex.solution} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )}

        {activeTab === 'qa' && (
            <div className="animate-fade-in h-[70vh] flex flex-col bg-white rounded-[2.5rem] border border-gray-200 shadow-xl overflow-hidden relative">
                {/* Chat Header */}
                <div className="px-8 py-6 border-b border-gray-100 bg-slate-50/80 flex items-center justify-between shrink-0">
                    <div>
                        <h3 className="text-xl font-extrabold tracking-tight text-slate-950">KI-Tutor</h3>
                        <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">Gymnasium SA Spezialist</p>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase">Aktiv</span>
                    </div>
                </div>

                {/* Messages Area */}
                <div 
                    ref={chatScrollAreaRef}
                    className="flex-1 overflow-y-auto p-8 space-y-6 bg-white flex flex-col"
                >
                    {qaHistory.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center opacity-40 text-center py-12">
                            <HelpCircle className="w-16 h-16 mb-4 text-slate-300" />
                            <p className="font-extrabold text-slate-950 text-xl tracking-tight">Hast du Fragen?</p>
                            <p className="text-sm font-medium">Frag mich nach Details oder Erklärungen.</p>
                        </div>
                    ) : (
                        qaHistory.map((item, idx) => (
                            <div key={idx} className="space-y-4 animate-fade-in">
                                {/* User Bubble */}
                                <div className="flex justify-end">
                                    <div className="bg-slate-950 text-white py-3.5 px-5 rounded-2xl rounded-tr-none text-sm font-semibold max-w-[85%] shadow-lg">
                                        {item.q}
                                    </div>
                                </div>
                                {/* Tutor Bubble */}
                                <div className="flex justify-start">
                                    <div className="bg-slate-50 border border-slate-100 py-5 px-6 rounded-2xl rounded-tl-none text-base text-slate-950 font-medium max-w-[95%] shadow-sm overflow-hidden">
                                        {item.a ? (
                                            <MarkdownRenderer content={item.a} onLinkClick={onInternalLinkClick} />
                                        ) : (
                                            <div className="flex gap-1.5 py-1">
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    {/* Extra loader if asking but history not yet updated with placeholder */}
                    {isAsking && qaHistory.length > 0 && !qaHistory[qaHistory.length - 1].a && (
                        <div className="h-4" />
                    )}
                    <div ref={chatBottomRef} className="h-2 shrink-0" />
                </div>

                {/* Input Area */}
                <div className="p-6 bg-slate-50/50 border-t border-gray-100 shrink-0">
                    <div className="flex gap-3 items-center bg-white rounded-3xl p-1.5 pl-6 pr-1.5 shadow-md border border-gray-200 focus-within:border-slate-950 transition-all">
                        <input 
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleAsk();
                                }
                            }}
                            placeholder="Frage den Tutor..."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-base font-bold py-3 text-slate-950 placeholder:text-slate-400"
                            disabled={isAsking}
                        />
                        <button 
                            onClick={handleAsk}
                            disabled={isAsking || !question.trim()}
                            className="bg-slate-950 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-20 shadow-sm"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-wider mt-3">
                        KI kann Fehler machen. Fachlehrpläne Sachsen-Anhalt 2022.
                    </p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
