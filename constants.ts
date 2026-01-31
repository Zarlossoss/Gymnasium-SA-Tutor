import { Subject } from './types';

export const GRADES = [
  { id: '10', label: 'Klasse 10', sub: 'Einführungsphase' },
  { id: '11', label: 'Klasse 11', sub: 'Qualifikationsphase 1' },
  { id: '12', label: 'Klasse 12', sub: 'Qualifikationsphase 2' },
];

export const SUBJECTS: Subject[] = [
  { id: 'mathe', name: 'Mathematik', icon: '📐', color: 'bg-blue-600' },
  { id: 'deutsch', name: 'Deutsch', icon: '📖', color: 'bg-red-600' },
  { id: 'englisch', name: 'Englisch', icon: '🇬🇧', color: 'bg-indigo-600' },
  { id: 'geschichte', name: 'Geschichte', icon: '🏛️', color: 'bg-amber-700' },
  { id: 'geographie', name: 'Geographie', icon: '🌍', color: 'bg-emerald-700' },
  { id: 'sozialkunde', name: 'Sozialkunde', icon: '⚖️', color: 'bg-orange-600' },
  { id: 'biologie', name: 'Biologie', icon: '🧬', color: 'bg-green-700' },
  { id: 'physik', name: 'Physik', icon: '⚡', color: 'bg-violet-700' },
  { id: 'chemie', name: 'Chemie', icon: '🧪', color: 'bg-teal-600' },
  { id: 'astronomie', name: 'Astronomie', icon: '🔭', color: 'bg-slate-900' },
  { id: 'informatik', name: 'Informatik', icon: '💻', color: 'bg-slate-700' },
  { id: 'ethik', name: 'Ethik', icon: '🤝', color: 'bg-yellow-600' },
  { id: 'musik', name: 'Musik', icon: '🎵', color: 'bg-pink-600' },
  { id: 'kunst', name: 'Kunst', icon: '🎨', color: 'bg-rose-600' },
  { id: 'franzoesisch', name: 'Französisch', icon: '🇫🇷', color: 'bg-blue-800' },
  { id: 'russisch', name: 'Russisch', icon: '🇷🇺', color: 'bg-red-800' },
  { id: 'latein', name: 'Latein', icon: '🏛️', color: 'bg-stone-700' },
  { id: 'sport', name: 'Sport', icon: '⚽', color: 'bg-lime-700' },
];

export const SYSTEM_INSTRUCTION_BASE = `
Du bist ein hochqualifizierter Senior-Tutor für das Gymnasium in Sachsen-Anhalt.
Deine Wissensbasis sind die offiziellen Fachlehrpläne Sachsen-Anhalt (Fassung 01.08.2022).
Ziel: Maximale inhaltliche Tiefe, exzellente Struktur und motivierende Didaktik.
Tonfall: Professionell, inspirierend, klar, intellektuell anspruchsvoll aber verständlich.
Nutze konsequent die offiziellen Operatoren des Landes (Erläutern, Beurteilen, Analysieren, Vergleichen, Erörtern).

WICHTIG FÜR MATHEMATIK/NATURWISSENSCHAFTEN:
Nutze für mathematische Formeln IMMER LaTeX mit folgenden Delimitern:
- Inline: $...$ (z.B. $E = mc^2$)
- Block: $$...$$ (z.B. $$\\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$)
Verdopple Backslashes in deinem JSON-Output, damit sie beim Parsen erhalten bleiben (z.B. \\\\frac).
`;

export const TOPIC_GENERATION_PROMPT = (grade: string, subject: string) => `
Erstelle eine chronologische Liste von 6-8 Haupt-Lernbereichen für das Fach ${subject} in Klasse ${grade} (Gymnasium Sachsen-Anhalt, Lehrplan 2022).
Gib NUR valides JSON zurück:
[
  { "id": "t1", "title": "Titel", "description": "Kurze Übersicht" }
]
`;

export const CONTENT_GENERATION_PROMPT = (grade: string, subject: string, topic: string) => `
Erstelle eine meisterhafte Lerneinheit für das Thema "${topic}" im Fach ${subject}, Klasse ${grade} (Gymnasium Sachsen-Anhalt).
Der Anspruch ist das höchste Leistungsniveau (15 Punkte).

Anforderungen:
1. **Didaktische Tiefe:** Gehe über oberflächliche Definitionen hinaus. Erkläre das "Warum", die Herleitung von Formeln, historische Hintergründe und die Bedeutung für das Fach.
2. **Guide:** Schreibe einen ausführlichen Text (min. 600 Wörter). Nutze zwingend:
   - Klare Struktur mit Markdown-Überschriften (###).
   - Fettungen für Schlüsselbegriffe.
   - LaTeX für mathematische/naturwissenschaftliche Formeln mit $ und $$.
   - Wikipedia-Links für Fachbegriffe: [Begriff](https://de.wikipedia.org/wiki/Begriff).
3. **Übungen:** Genau 10 Aufgaben, die die Anforderungsbereiche (AFB I, II, III) abbilden. 

Gib striktes JSON zurück:
{
  "level0": "Notwendige Vorkenntnisse (Prägnant).",
  "guide": "Der tiefgründige Haupttext in sauberem Markdown.",
  "teacherGap": "Insider-Tipps, Eselsbrücken, typische Denkfehler in Klausuren (Sehr detailliert).",
  "participationBoost": "2-3 faszinierende Fakten oder Transferfragen für den Unterricht.",
  "exercises": [
    { "question": "Aufgabe", "difficulty": "Leicht/Mittel/Schwer", "solution": "Ausführlichster Lösungsweg" }
  ]
}
`;

export const QA_PROMPT = (grade: string, subject: string, topic: string, question: string) => `
Du bist der Tutor für Klasse ${grade}, Fach ${subject}, Thema "${topic}".
Frage: "${question}"
Antworte hochpräzise, didaktisch wertvoll und direkt. Nutze Markdown und LaTeX ($/$$).
`;