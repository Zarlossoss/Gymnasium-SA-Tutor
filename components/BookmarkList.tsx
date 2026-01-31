import React from 'react';
import { Bookmark } from '../types';
import { ChevronLeft, Trash2, ArrowRight } from 'lucide-react';

interface BookmarkListProps {
  bookmarks: Bookmark[];
  onSelectBookmark: (bookmark: Bookmark) => void;
  onRemoveBookmark: (id: string, e: React.MouseEvent) => void;
  onBack: () => void;
}

export const BookmarkList: React.FC<BookmarkListProps> = ({ bookmarks, onSelectBookmark, onRemoveBookmark, onBack }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8 animate-fade-in min-h-screen">
       <button onClick={onBack} className="text-gray-400 hover:text-black mb-12 flex items-center transition-colors text-sm font-semibold">
         <ChevronLeft className="w-4 h-4 mr-1" /> Zurück
       </button>

       <div className="mb-16">
          <h2 className="text-5xl font-extrabold text-black tracking-tighter mb-4">Lesezeichen.</h2>
          <p className="text-xl text-gray-400 font-medium">Deine persönliche Mediathek gespeicherter Themen.</p>
       </div>

       {bookmarks.length === 0 ? (
         <div className="text-center py-32 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
            <p className="text-2xl font-bold text-gray-300">Noch keine Lesezeichen vorhanden.</p>
            <p className="text-gray-400 mt-2 max-w-xs mx-auto font-medium">Nutze das Stern-Symbol in den Lektionen, um Inhalte hier zu sichern.</p>
         </div>
       ) : (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {bookmarks.map((bm) => (
                 <div key={bm.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 group relative">
                     <div className="flex justify-between items-start mb-6">
                        <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white ${bm.subject.color} uppercase tracking-widest`}>
                            {bm.subject.name} • Klasse {bm.gradeId}
                        </span>
                        <button 
                            onClick={(e) => onRemoveBookmark(bm.id, e)}
                            className="text-gray-200 hover:text-red-500 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                     </div>
                     <h3 className="text-2xl font-bold text-black mb-3 tracking-tight leading-tight">{bm.topic.title}</h3>
                     <p className="text-gray-500 font-medium line-clamp-2 mb-8 text-sm">{bm.topic.description}</p>
                     
                     <button 
                        onClick={() => onSelectBookmark(bm)}
                        className="w-full py-4 bg-gray-50 text-black font-bold rounded-2xl hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group"
                     >
                        <span>Lernen fortsetzen</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                     </button>
                 </div>
             ))}
         </div>
       )}
    </div>
  );
};