import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API,
 })
 


 const openai = new OpenAIApi(configuration);


export default async function handler(req, res) {
  const{prompt}= req.body;
  console.log(prompt)
 const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  }).then(res => res.data.data[0].url).catch(err => `Dalle was unable to create image for that! (Error:${err.message})`);


console.log(response)
  res.status(200).json({ res: response })
}
