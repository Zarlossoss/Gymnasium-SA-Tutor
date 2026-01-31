import React from 'react';
import { Topic, Subject, GradeLevel } from '../types';
import { ChevronRight } from 'lucide-react';

interface TopicTimelineProps {
  topics: Topic[];
  subject: Subject;
  grade: GradeLevel;
  onSelectTopic: (topic: Topic) => void;
  onBack: () => void;
  isLoading: boolean;
}

export const TopicTimeline: React.FC<TopicTimelineProps> = ({ topics, subject, grade, onSelectTopic, onBack, isLoading }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-fade-in min-h-screen">
       <button onClick={onBack} className="text-gray-400 hover:text-black mb-12 flex items-center transition-colors text-sm font-medium">
         <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Alle Fächer
       </button>

       <div className="mb-16 flex items-center gap-6">
         <div className={`w-16 h-16 rounded-2xl ${subject.color} text-white text-3xl flex items-center justify-center shadow-xl`}>
            {subject.icon}
         </div>
         <div>
            <h2 className="text-4xl font-bold text-black tracking-tight">{subject.name}</h2>
            <p className="text-lg text-gray-400 font-medium">Timeline Klasse {grade}</p>
         </div>
       </div>

       {isLoading ? (
         <div className="space-y-6">
           {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="h-28 bg-white rounded-3xl animate-pulse border border-gray-100"></div>
           ))}
           <p className="text-center text-gray-300 text-sm mt-8">Der offizielle Lehrplan wird synchronisiert...</p>
         </div>
       ) : (
         <div className="relative pl-12">
            {/* Minimalist vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200"></div>

            <div className="space-y-10">
              {topics.map((topic, index) => (
                <div key={topic.id} className="relative group">
                   {/* Node marker */}
                   <div className="absolute -left-[37px] top-4 w-2 h-2 rounded-full bg-white border-2 border-gray-400 group-hover:border-black group-hover:scale-125 transition-all z-10"></div>
                   
                   <button 
                    onClick={() => onSelectTopic(topic)}
                    className="w-full text-left transition-all duration-300 transform group-hover:-translate-x-1"
                   >
                     <div className="flex items-start justify-between">
                       <div>
                         <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1 block">Themenbereich {index + 1}</span>
                         <h3 className="text-2xl font-bold text-black group-hover:text-indigo-600 transition-colors tracking-tight mb-2">{topic.title}</h3>
                         <p className="text-gray-500 leading-relaxed font-medium line-clamp-2 max-w-xl">{topic.description}</p>
                       </div>
                       <ChevronRight className="text-gray-200 group-hover:text-black transition-colors w-6 h-6 mt-6" />
                     </div>
                   </button>
                </div>
              ))}
            </div>
         </div>
       )}
    </div>
  );
};