import React from 'react';
import { GradeLevel, Subject } from '../types';
import { GRADES, SUBJECTS } from '../constants';
import { ChevronRight } from 'lucide-react';

interface GradeSelectionProps {
  onSelect: (grade: GradeLevel) => void;
}

export const GradeSelection: React.FC<GradeSelectionProps> = ({ onSelect }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 animate-fade-in">
      <div className="text-center py-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black mb-4">Gymnasium Sachsen-Anhalt.</h1>
        <p className="text-xl sm:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Strukturierte Lernumgebung für ein besseres Abitur. Wähle deine Klasseneinstufung.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
        {GRADES.map((grade) => (
          <button
            key={grade.id}
            onClick={() => onSelect(grade.id as GradeLevel)}
            className="group relative bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-500 text-left overflow-hidden h-full flex flex-col"
          >
            <div className="flex-1">
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 block">
                {grade.sub}
                </span>
                <h2 className="text-4xl font-bold text-black mb-6 tracking-tight group-hover:text-indigo-600 transition-colors">
                {grade.label}
                </h2>
                <div className="w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-indigo-600 transition-all duration-500 rounded-full mb-8"></div>
            </div>
            
            <div className="flex items-center justify-between text-black font-semibold">
                <span className="text-sm">Inhalte ansehen</span>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

interface SubjectSelectionProps {
  onSelect: (subject: Subject) => void;
  onBack: () => void;
  grade: GradeLevel;
}

export const SubjectSelection: React.FC<SubjectSelectionProps> = ({ onSelect, onBack, grade }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 animate-fade-in">
       <button onClick={onBack} className="text-gray-400 hover:text-black mb-12 flex items-center transition-colors text-sm font-medium">
         <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Alle Klassenstufen
       </button>
       
       <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight mb-2">Fach auswählen.</h2>
        <p className="text-xl text-gray-400">Lehrplanrelevante Themen für Klasse {grade}.</p>
       </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SUBJECTS.map((sub) => (
             <button
               key={sub.id}
               onClick={() => onSelect(sub)}
               className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center gap-4 group"
             >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 ${sub.color} text-white shadow-lg`}>
                  {sub.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 text-center">{sub.name}</h3>
             </button>
          ))}
       </div>
    </div>
  );
};