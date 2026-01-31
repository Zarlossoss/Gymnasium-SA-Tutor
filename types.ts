
export type GradeLevel = '10' | '11' | '12';

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
}

export interface Exercise {
  question: string;
  difficulty: 'Leicht' | 'Mittel' | 'Schwer';
  solution: string;
}

export interface LearningContent {
  level0: string;
  guide: string;
  teacherGap: string;
  participationBoost: string;
  exercises: Exercise[];
}

export interface Bookmark {
  id: string;
  gradeId: GradeLevel;
  subject: Subject;
  topic: Topic;
  timestamp: number;
}

export interface ContentHistoryItem {
  topic: Topic;
  content: LearningContent;
}

export interface AppState {
  step: 'GRADE_SELECTION' | 'SUBJECT_SELECTION' | 'TOPIC_TIMELINE' | 'CONTENT_VIEW' | 'BOOKMARKS_VIEW';
  selectedGrade: GradeLevel | null;
  selectedSubject: Subject | null;
  selectedTopic: Topic | null;
  topics: Topic[];
  currentContent: LearningContent | null;
  contentHistory: ContentHistoryItem[];
  bookmarks: Bookmark[];
  isLoading: boolean;
  error: string | null;
}
