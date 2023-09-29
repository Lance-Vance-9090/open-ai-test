import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const message = "My name is David";
// const context = "Making you learn about my personal information";

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content:
        "You are an assistant who is asking some questions related to user's personal information",
    },
    { role: "assistant", content: "What is your name?" },
    { role: "user", content: "My name is David" },
    {
      role: "user",
      content:
        "Is my answer above related to the age question you asked? Reply in yes or no",
    },
  ],
  temperature: 0,
  max_tokens: 150,
});

// const response1 = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       role: "system",
//       content: `You are an assistant who is asking some questions related to user's personal information. Refer to the previous chat : ${response.id}`,
//     },
//     { role: "assistant", content: "What is your age?" },
//     { role: "user", content: "22 years old" },
//     {
//       role: "user",
//       content: "Please tell my name again",
//     },
//   ],
//   temperature: 0,
//   max_tokens: 150,
// });

console.log(response.choices);
// console.log(response1.choices);
