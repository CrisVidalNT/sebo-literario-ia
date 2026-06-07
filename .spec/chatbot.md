# Google AI Studio (Gemini)

``` js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

const result = await model.generateContent(
  "Explique inteligência artificial"
);

console.log(result.response.text());
```
