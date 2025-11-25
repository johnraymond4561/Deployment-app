import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// We assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API Key not configured");
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are Nexus, an AI assistant for a minimalist deployment platform. You help developers deploy apps, configure infrastructure, and debug pipelines. Keep your answers concise, technical, and helpful. Format code blocks in markdown.",
      }
    });

    return response.text || "No response generated.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("API Key")) {
      return "Error: API Key is missing or invalid. Please check your configuration.";
    }
    return "Error connecting to Nexus AI. Please try again later.";
  }
};
