"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { useEffect, useRef, useState } from "react";
import { ClipboardIcon, CodeBracketIcon, CodeBracketSquareIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import Typewriter from "./Typewriter";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Code_Main() {
  const [copy, setcopy] = useState(null);
    const [code, setCode] = useState(null);
    const [loader, setloader] = useState(false);
    const [prompt, setPrompt] = useState(`function onLoad(editor) {
      console.log("i've loaded");
    }`);
    const containerRef = useRef(null);
const model = "text-davinci-003";

  const scrollToView = () => {
    containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

const sendPrompt = async () => {
    setCode(null);
    if(!prompt) return;
    setloader(true);
    const input = prompt.trim();
    console.log(input)

    const result = await fetch("api/ChatGptApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: 'hello world program in cpp',
          model:model,
        }),
      }).then(response => response.json())
      .then(data => {
        setCode(data.res.substring(2));
        setloader(false);
      })
      .catch(error => console.error(error));;
  };



  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-center items-center p-[5%] "
      variants={textVariant(1.0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >

<div className="design w-full flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-blue-600">
<div className="flex flex-col w-[60%] lg:p-4">
<div className="content lg:m-3">
<div className="flex font-bold uppercase text-white mt-5 text-2xl tracking-normal">
            <CommandLineIcon className="w-8 h-8 mr-1" />
            Explain Code
          </div>
          <div className="text-left text-white opacity-60 mt-3 text-sm">
            explain some code based on syntax provided.
          </div>
          <div className="text-left text-white mt-7 mb-3 text-sm font-bold">
            Paste your code below:
          </div>
          <textarea
            className="p-6 ml-3 w-full h-48 placeholder-white placeholder-opacity-50 rounded-md resize-none focus:outline-none focus:border-transparent bg-[#141321] text-white"
            placeholder="Paste your code here..."
            value={prompt}
            spellCheck="false"
            autoCorrect="false"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
</div>
<a
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mb-6 ml-6 w-[30%]"
          onClick={sendPrompt}
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Optimize</span>
        </a>
        </div>

        <div className="p-4 flex flex-col w-[60%]">
      <div className="flex font-bold uppercase text-white mt-5 text-2xl tracking-normal">
            <CodeBracketSquareIcon className="w-8 h-8 mr-1"/>
            what does this code do?
          </div>
          <div className="text-left text-white opacity-60 mt-3 text-sm">
            The following code does.
          </div>
          <div
            className="p-6 mt-5 w-[100%] h-[270px] placeholder-white placeholder-opacity-50 rounded-md resize-none focus:outline-none focus:border-transparent bg-[#141321] text-white overflow-y-scroll scrollbar-hide cursor-default"
            placeholder="Paste your code here..."
            spellCheck="false"
            autoCorrect="false"
            style={{ whiteSpace: "pre-wrap" }}
            ref={containerRef} 
          >
{code ? (
               <Typewriter text={code} ref={containerRef} 
               scrollToView ={scrollToView}
               containerRef={containerRef}
               />
            ):(
              <>
              {loader ? (
                                          
                                                <div className="">
                <div class=" top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden opacity-75 flex flex-col items-center justify-center">
                <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                </div>
              
                                            {/* <div class="box">
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
                                            </div> */}
                                        </div>
              ):null}
              </>
            )}
          </div>

          <CopyToClipboard text={code}
          onCopy={() => setcopy("Copied")}
          >
           <a
            className="px-5 py-2.5 relative rounded group font-medium text-white inline-block mt-3 w-48"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative flex">
              <ClipboardIcon className="w-6 h-6 mr-2" />
              {copy ? copy : "Copy output"}
              
            </span>
          </a>

        </CopyToClipboard>

      </div>

</div>





    {/* <div className="design flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-blue-500 to-blue-600 ">
    <div className="card">
        <div className="content m-3">
          <div className="flex font-bold uppercase text-white mt-5 text-2xl tracking-normal">
            <CommandLineIcon className="w-8 h-8 mr-1" />
            Explain Code
          </div>
          <div className="text-left text-white opacity-60 mt-3 text-sm">
            explain some code based on syntax provided.
          </div>

          <div className="text-left text-white mt-7 mb-3 text-sm font-bold">
            Paste your code below:
          </div>
          <textarea
            className="p-6 w-full h-48 placeholder-white placeholder-opacity-50 rounded-md resize-none focus:outline-none focus:border-transparent bg-[#233d54] text-white"
            placeholder="Paste your code here..."
            value={prompt}
            spellCheck="false"
            autoCorrect="false"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </div>

        <a
          href="#_"
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mb-6 ml-6"
          onClick={sendPrompt}
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Optimize</span>
        </a>
      </div>


      <div className="p-4 flex flex-col">
      <div className="flex font-bold uppercase text-white mt-5 text-2xl tracking-normal">
            <CodeBracketSquareIcon className="w-8 h-8 mr-1"/>
            what does this code do?
          </div>
          <div className="text-left text-white opacity-60 mt-3 text-sm">
            The following code does.
          </div>
          <div
            className="p-6 mt-5 w-[350px] h-[270px] placeholder-white placeholder-opacity-50 rounded-md resize-none focus:outline-none focus:border-transparent bg-[#233d54] text-white overflow-y-scroll scrollbar-hide cursor-default"
            placeholder="Paste your code here..."
            spellCheck="false"
            autoCorrect="false"
            style={{ whiteSpace: "pre-wrap" }}
            ref={containerRef} 
          >
{code ? (
               <Typewriter text={code} ref={containerRef} 
               scrollToView ={scrollToView}
               containerRef={containerRef}
               />
            ):(
              <>
              {loader ? (
                                            <div class="boxes">
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
              ):null}
              </>
            )}
          </div>


<a
          href="#_"
          className="px-5 py-2.5 relative rounded group font-medium text-white inline-block mt-3 w-48"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <span className="relative flex">
            <ClipboardIcon className="w-6 h-6 mr-2" />
            Copy output
          </span>
        </a>
      </div>

    </div> */}
      
    </motion.div>
  );
}
