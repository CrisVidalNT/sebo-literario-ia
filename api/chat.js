import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método não permitido"
    });
  }

  try {

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt não informado"
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(prompt);

    const text = result.response?.text?.() || "Não foi possível gerar uma resposta.";

    return res.status(200).json({
      response: text
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro ao gerar resposta."
    });

  }
}