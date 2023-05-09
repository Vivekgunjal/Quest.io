"use client";

import { motion } from "framer-motion";
import styles from "../../styles";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowTrendingUpIcon, Bars4Icon, BugAntIcon, ChatBubbleBottomCenterIcon, ClockIcon, CodeBracketIcon, CubeTransparentIcon, HashtagIcon, LanguageIcon } from "@heroicons/react/24/outline";
import ChatGptCard from "./ChatGptCard";

export default function ChatGPTComponents() {
  const router = new useRouter();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col"
    >
      <motion.div
        variants={textVariant(0.9)}
        className="flex justify-center w-full"
      >
        <span className="text-[2.5rem] uppercase text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-purple-500 mt-5 font-bold">
          examples
        </span>
      </motion.div>
      <motion.div
        variants={textVariant(1.1)}
        className="flex justify-center w-full text-[1rem] text-white mt-3"
      >
        Explore what's possible with some example applications
      </motion.div>

      <div className="grid grid-rows-4 sm:grid-flow-col sm:gap-9  m-5 gap-10 p-8 ">
     

        <ChatGptCard
            head= "Code Converter"
            desc= "Convert Code into Another Programming Langauge."
            color="bg-gradient-to-r from-indigo-400 to-cyan-400"
          icon={
            <LanguageIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
          onClick={() => router.push("/code-convert")}
        />

        {/* Explain Code */}
        <ChatGptCard
            head= "Explain code"
            desc= "Explain a complicated piece of code."
            color=
              "bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-900"
          icon={
            <HashtagIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
          onClick={() => router.push("/code-explain")}
        />

        {/* Time And Space  */}
        <ChatGptCard
            head="Time And Space"
            desc= "Time And Space Complexity"
            color=
              "bg-gradient-to-r from-rose-400 to-red-500"

          icon={
            <ClockIcon  className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
          onClick={() => router.push("/time-and-space")}
        />
        {/* Bug Fixer */}

        <ChatGptCard
            head="Bug Fixer"
            desc= "Fix The BUg In Given COde"
            color=
              "bg-gradient-to-r from-teal-200 to-teal-500"
          icon={
            <BugAntIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
          onClick={() => router.push("/bug-fixer")}
        />

        {/* Code Summarizer */}
        <ChatGptCard
            head= "Code Summarizer"
            desc= "Summarize the code"
            color=
              "bg-gradient-to-r from-slate-900 to-slate-700"
          icon={
            <ChatBubbleBottomCenterIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
          onClick={() => router.push("/code-summarizer")}
        />
        {/* Code Optimization */}
        <ChatGptCard
            head="Code Optimization"
            desc= "Optimize the code"
            color=
              "bg-gradient-to-r from-emerald-400 to-cyan-400"
          icon={
            <ArrowTrendingUpIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
           onClick={() => router.push("/code-optimization")}
        />
        {/* Code Refactor */}
        <ChatGptCard
            head="Code Refactor"
            desc= "Refactor the code"
            color=
              "bg-gradient-to-r from-fuchsia-500 to-cyan-500"
          icon={
            <Bars4Icon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
          onClick={() => router.push("/code-refactor")}
        />
        {/* Code Generator */}
        <ChatGptCard
            head= "Code Generator"
            desc= "Generate the code"
            color=
              "bg-gradient-to-r from-fuchsia-500 to-pink-500"
          icon={
            <CubeTransparentIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
          onClick={() => router.push("/code-generator")}
        />
        {/* Code Completion */}
        <ChatGptCard
            head= "Code Completion"
            desc= "Complete the code"
            color=
              "bg-gradient-to-r from-emerald-500 to-emerald-900"
          icon={
            <CodeBracketIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125" />
          }
          onClick={() => router.push("/code-completion")}
          
        />
      </div>
    </motion.div>
  );
}
