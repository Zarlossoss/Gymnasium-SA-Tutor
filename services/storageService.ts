import { LearningContent } from '../types';

const PREFIX = 'gymnasium_sa_offline_';

const generateKey = (grade: string, subject: string, topicTitle: string): string => {
  // Create a safe key by removing special chars from title
  const safeTitle = topicTitle.replace(/[^a-zA-Z0-9]/g, '_');
  return `${PREFIX}${grade}_${subject}_${safeTitle}`;
};

export const saveOfflineContent = (grade: string, subject: string, topicTitle: string, content: LearningContent): void => {
  try {
    const key = generateKey(grade, subject, topicTitle);
    localStorage.setItem(key, JSON.stringify(content));
  } catch (error) {
    console.error("Failed to save offline content (quota exceeded?)", error);
    alert("Speicher voll! Inhalt konnte nicht offline gespeichert werden.");
  }
};

export const loadOfflineContent = (grade: string, subject: string, topicTitle: string): LearningContent | null => {
  try {
    const key = generateKey(grade, subject, topicTitle);
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data) as LearningContent;
  } catch (error) {
    console.error("Failed to load offline content", error);
    return null;
  }
};

export const removeOfflineContent = (grade: string, subject: string, topicTitle: string): void => {
  const key = generateKey(grade, subject, topicTitle);
  localStorage.removeItem(key);
};

export const isContentOffline = (grade: string, subject: string, topicTitle: string): boolean => {
  const key = generateKey(grade, subject, topicTitle);
  return !!localStorage.getItem(key);
};
