
import { GoogleGenAI, Type } from "@google/genai";
import { Topic, LearningContent } from "../types";
import { SYSTEM_INSTRUCTION_BASE, TOPIC_GENERATION_PROMPT, CONTENT_GENERATION_PROMPT, QA_PROMPT } from "../constants";
import { STATIC_TOPICS, STATIC_CONTENT_TRIGONOMETRY } from "../data/curriculum";
import { loadOfflineContent } from "./storageService";

const apiKey = process.env.API_KEY;

const cleanJson = (text: string): string => {
  return text.replace(/```json/g, '').replace(/```/g, '').trim();
};

const parseJsonSafe = (text: string) => {
    let cleaned = cleanJson(text);
    
    try {
        return JSON.parse(cleaned);
    } catch (error) {
        console.warn("Initial JSON parse failed, attempting surgical fix for LaTeX backslashes...");
        let fixed = cleaned.replace(/\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '\\\\');
        try {
            return JSON.parse(fixed);
        } catch (error2) {
            console.error("Critical JSON parse failure. Raw text follows for debugging:", cleaned);
            throw error;
        }
    }
};

export const fetchTopics = async (grade: string, subject: string): Promise<Topic[]> => {
  if (STATIC_TOPICS[grade] && STATIC_TOPICS[grade][subject]) {
    return STATIC_TOPICS[grade][subject];
  }

  if (!apiKey) throw new Error("API Key missing");
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: TOPIC_GENERATION_PROMPT(grade, subject),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_BASE,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["id", "title", "description"]
          }
        }
      }
    });
    return parseJsonSafe(response.text);
  } catch (error) {
    console.error("Topics fetch error:", error);
    return [{ id: 'err', title: 'Verbindungsfehler', description: 'Inhalte konnten nicht geladen werden.' }];
  }
};

export const fetchContent = async (grade: string, subject: string, topicTitle: string): Promise<LearningContent> => {
  const offline = loadOfflineContent(grade, subject, topicTitle);
  if (offline) return offline;

  if (grade === '10' && subject === 'Mathematik' && topicTitle.includes('Trigonometrie')) {
      return new Promise(r => setTimeout(() => r(STATIC_CONTENT_TRIGONOMETRY), 300));
  }

  if (!apiKey) throw new Error("API Key missing");
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: CONTENT_GENERATION_PROMPT(grade, subject, topicTitle),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_BASE,
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                level0: { type: Type.STRING },
                guide: { type: Type.STRING },
                teacherGap: { type: Type.STRING },
                participationBoost: { type: Type.STRING },
                exercises: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      question: { type: Type.STRING },
                      difficulty: { type: Type.STRING, enum: ["Leicht", "Mittel", "Schwer"] },
                      solution: { type: Type.STRING }
                    },
                    required: ["question", "difficulty", "solution"]
                  }
                }
            },
            required: ["level0", "guide", "teacherGap", "participationBoost", "exercises"]
        }
      }
    });
    return parseJsonSafe(response.text);
  } catch (error) {
    console.error("Content fetch error:", error);
    return {
      level0: "Fehler beim Laden.",
      guide: "Inhalt konnte nicht generiert werden.",
      teacherGap: "-",
      participationBoost: "-",
      exercises: []
    };
  }
};

export const askTutorQuestion = async (grade: string, subject: string, topicTitle: string, question: string): Promise<string> => {
  if (!apiKey) return "API Key fehlt.";
  const ai = new GoogleGenAI({ apiKey });
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview', 
        contents: QA_PROMPT(grade, subject, topicTitle, question),
        config: { systemInstruction: SYSTEM_INSTRUCTION_BASE }
      });
      return response.text || "Keine Antwort möglich.";
  } catch (error) {
      return "Fehler bei der Verbindung zum Tutor.";
  }
};
