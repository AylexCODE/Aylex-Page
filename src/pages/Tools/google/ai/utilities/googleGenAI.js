import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GOOGLE_AI_API_KEY });

export default async function googleGenAI(model, prompt) {
  const response = await ai.models.generateContent({
    model: model,//"gemini-2.5-flash",
    contents: prompt//"Explain how AI works in a few words",
  });
  console.log(response.text);
  return response;
}