import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let messageHistory = [];

let firstCall = [
  {
    role: "system",
    content:
      "You are an assistant who is asking some questions related to user's personal information",
  },
  { role: "assistant", content: "What is your name?" },
  { role: "user", content: "My name is David" },
  { role: "assistant", content: "What is your age?" },
  { role: "user", content: "it is 22 years old" },
  {
    role: "user",
    content:
      "Is my answer above related to the age question you asked? Reply in yes or no",
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: firstCall,
  temperature: 0,
  max_tokens: 150,
});

messageHistory.push(firstCall);

const obj = { role: "user", content: "What is my age and name?" };

messageHistory[0].push(obj);

const response1 = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: messageHistory[0],
  temperature: 0,
  max_tokens: 150,
});

console.log(response.choices);
console.log(response1.choices);
