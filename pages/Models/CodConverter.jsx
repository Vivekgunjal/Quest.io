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


export default function CodConverter() {
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
      // const input = prompt.trim() + "\n explained Above Code in a concise way:";
      const input = prompt.trim() + "\n convert Above Code in " + getLangauage.current.value + " Language";

 

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
          setCode(data.res.substring(0));
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
      <div className="flex flex-col lg:flex-row gap-9 h-[70vh]">
        <Editor
          value={prompt}
          onValueChange={(code) => setPrompt(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
            width: "100%",
            height: "100%",
            overflow: "auto",
            whiteSpace: "pre-wrap",
          }}
          className="p-6 w-full h-[70vh] placeholder-white placeholder-opacity-50 rounded-md resize-none focus:outline-none focus:border-transparent bg-[#0d1117] text-white"
        />

        <div
          className="p-6 w-full h-[70vh]  overflow-y-scroll scrollbar-hide cursor-default "
          placeholder="Paste your code here..."
          spellCheck="false"
          autoCorrect="false"
          style={{
             whiteSpace: "pre-wrap" ,
             backdropFilter: "blur(50px)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
            width: "100%",
            height: "100%",
            overflow: "auto",
            wordWrap: "break-word",
            position: "relative",
            zIndex: 1
          
            
            }}
        >
          {code ? (
            <Typewriter text={code} />
          ) : (
            <>
              {loader ? (
                  <div className="overflow-hidden">
                  <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden opacity-75 flex flex-col items-center justify-center">
                  <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                  </div>
                </div>
                // <div className="boxes">
                //   <div class="box">
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //   </div>
                //   <div class="box">
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //   </div>
                //   <div class="box">
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //   </div>
                //   <div class="box">
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //   </div>
                // </div>
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

        <div>

          
        <div class="form__group field">
    <input required="" placeholder="Name" className="form__field" type="input" autoCorrect="false" ref={getLangauage}/>
    <label class="form__label" for="name">Choose a Language</label>
</div>

        </div>
      </div>
    </motion.div>
  );
}
