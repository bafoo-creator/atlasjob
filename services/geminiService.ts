import { GoogleGenAI, Type } from "@google/genai";
import { Job, Candidate } from "../types.ts";

const getAIInstance = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY non configurée.");
  }
  return new GoogleGenAI({ apiKey });
};

export const getJobMatchScore = async (job: Job, candidate: Candidate): Promise<{ score: number; reasoning: string }> => {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyse la compatibilité entre ce job et ce candidat pour le marché marocain.
      Job: ${job.title} chez ${job.company}. Catégorie: ${job.category}.
      Candidat: ${candidate.title}. Compétences: ${candidate.skills.join(", ")}.
      Retourne un JSON avec un score (0-100) et une brève explication.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            reasoning: { type: Type.STRING }
          },
          required: ["score", "reasoning"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Error:", error);
    return { score: 50, reasoning: "Impossible d'analyser le score pour le moment (vérifiez la configuration API)." };
  }
};

export const optimizeCVText = async (cvContent: string): Promise<string> => {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tu es un expert en recrutement au Maroc. Optimise ce contenu de CV pour le rendre plus professionnel et impactant pour les recruteurs locaux: ${cvContent}`,
    });
    return response.text || "Erreur d'optimisation";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "L'optimisation IA est indisponible pour le moment.";
  }
};