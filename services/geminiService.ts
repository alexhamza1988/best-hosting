
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available as an environment variable
if (!process.env.API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we assume it's set.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateProTip = async (productName: string): Promise<string> => {
  try {
    const prompt = `Generate a single, concise pro-tip for using the tool "${productName}". The tip should be actionable and helpful for a new user. Maximum 40 words. Frame it as a "Pro Tip:".`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 1,
        topK: 1,
        maxOutputTokens: 60,
      }
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating pro tip:", error);
    return "Couldn't generate a tip at the moment. Please try again later.";
  }
};
