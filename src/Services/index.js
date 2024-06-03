import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sensMSGToOpenAI({ prompt, model, tokens = 2000 }) {
  const res = await openai.chat.completions.create({
    max_tokens: tokens,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
        ],
      },
    ],
    model: model,
  });
  return res;
}
