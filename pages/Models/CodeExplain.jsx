import React, { useRef, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import Typewriter from "../compoent/Typewriter";
import { motion } from "framer-motion";
import styles from '../../styles';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2 } from '../../utils/motion'

export default function CodeExplain() {
    const [code, setCode] = useState(null);
    const [loader, setloader] = useState(false);
    const [prompt, setPrompt] = useState(`function onLoad(editor) {
        console.log("i've loaded");
      }`);
    const getLangauage = useRef();
  
      const sendPrompt = async () => {
        setCode(null);
        if(!prompt) return;
        setloader(true);
        const input = prompt.trim() + "\n explained Above Code in a concise way:";
   
  
        console.log(input)
    
        const result = await fetch("/api/ChatGPTCodeConverter", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: input,
              model:"text-davinci-003",
            }),
          }).then(response => response.json())
          .then(data => {
            setCode(data.res.substring(2));
            setloader(false);
          })
          .catch(error => console.error(error));
      };



  return (
      <motion.div 
    variants={textVariant(1.1)}
    className="p-7">
      <div className="mb-6">
        <h1 className="text-white text-3xl">Code Converter</h1>
        <p className="mb-3 font-normal text-gray-400 mt-3">
        Convert simple Code into Another Programming Langauge.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-9">
        <Editor
          value={prompt}
          onValueChange={(code) => setPrompt(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
          }}
          className="p-6 w-full h-[70vh] placeholder-white placeholder-opacity-50 rounded-md resize-none focus:outline-none focus:border-transparent bg-[#0d1117] text-white"
        />

        <div
          className="p-6 w-full h-[70vh] placeholder-white placeholder-opacity-50 rounded-md resize-none focus:outline-none focus:border-transparent bg-[#0d1117] text-white overflow-y-scroll scrollbar-hide cursor-default"
          placeholder="Paste your code here..."
          spellCheck="false"
          autoCorrect="false"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {code ? (
            <Typewriter text={code} />
          ) : (
            <>
              {loader ? (
                <div className="boxes">
                  <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
      <div className="mt-10 flex gap-8">
        <a
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none cursor-pointer"
          onClick={sendPrompt}
        >
          Submit
        </a>
      </div>
    </motion.div>
  )
}
