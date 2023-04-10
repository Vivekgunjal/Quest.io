import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API,
 })
 


 const openai = new OpenAIApi(configuration);


export default async function handler(req, res) {
  const{prompt, model}= req.body;
  console.log(prompt)
 const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\"\"\""],
  }).then(res => res.data.choices[0].text).catch(err => `ChatGPT was unable to find an answer for that! (Error:${err.message})`);

console.log(response)
  res.status(200).json({ res: response })
}
