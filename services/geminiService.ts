
import { GoogleGenAI, Type } from "@google/genai";
import { AudienceInsight } from "../types";

const API_KEY = process.env.API_KEY || "";

export const generateAudiencePreview = async (source: string, vertical: string): Promise<AudienceInsight> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the hypothetical audience of a digital community or market source described as "${source}" which operates in the "${vertical}" vertical. Provide realistic data based on typical community behavior patterns for this segment. Focus on psychological drivers, core values, and specific linguistic styles.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          topics: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Top 3 topics discussed by this community."
          },
          sentimentScore: {
            type: Type.NUMBER,
            description: "Sentiment score from 0 to 100."
          },
          languageMarkers: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Specific phrases or dialect markers commonly used by this community."
          },
          conversionTriggers: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Psychological triggers that convert this specific market segment."
          },
          demographicsPreview: {
            type: Type.STRING,
            description: "A short summary of the core market demographic."
          }
        },
        required: ["topics", "sentimentScore", "languageMarkers", "conversionTriggers", "demographicsPreview"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim()) as AudienceInsight;
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    throw new Error("Invalid insight data generated");
  }
};
