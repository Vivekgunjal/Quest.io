'use client';
import { motion } from "framer-motion";
import styles from '../../styles';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2 } from '../../utils/motion'
import Typewriter from 'typewriter-effect';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HashtagIcon } from "@heroicons/react/24/outline";

export default function ChatGPTComponents() {
    const router = new useRouter();

  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className="flex flex-col"
    >
 <motion.div
 variants={textVariant(0.9)}
        className="flex justify-center w-full"
      >
        <span className="text-[2.5rem] uppercase text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-purple-500 mt-5">examples</span>
      </motion.div>
      <motion.div
        variants={textVariant(1.1)}
        className="flex justify-center w-full text-[1rem] text-white mt-3"
      >
        Explore what's possible 
            with some example applications
         
      </motion.div>

      {/* ChatGpt Components */}
      <motion.div 
      variants={textVariant(1.1)}
      className="flex flex-col mt-11 cursor-pointer">
        {/*  ChatGPT Cards */}
        {/* Code Converter */}
        <div className=" flex lg:flex-row flex-col justify-center gap-8 p-12 pt-0 h-[90vh]"
        >
          <div className="min-w-[31rem] max-w-[40rem] transform transition duration-500 hover:scale-95"
          onClick={() => router.push("/code-convert")}
          >
          <a
              className="flex items-center rounded-lg shadow bg-transparent"
            >
                <div
              className="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-700 rounded-md h-16 w-16 flex flex-col justify-center items-center"
              >
                <HashtagIcon className="w-6 h-6 text-white"/>
              </div>
                    <div className="flex flex-col justify-between pl-4">
                <h5 className=" text-2xl font-bold tracking-tight text-white">
                Code Converter
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                Convert Code into Another Programming
                Langauge.
                </p>
              </div>
                </a>
          </div>
          {/* Explain Code */}
          <div className="min-w-[31rem] max-w-[40rem] transform transition duration-500 hover:scale-95"
            onClick={() => router.push("/code-explain")}
          >
          <a
              className="flex items-center rounded-lg shadow bg-transparent"
            >
                 <div
              className="bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-900 rounded-md h-16 w-16 flex flex-col justify-center items-center"
              >
                <HashtagIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125"/>
              </div>
                    <div className="flex flex-col justify-between pl-4">
                <h5 className=" text-2xl font-bold tracking-tight text-white">
                Explain code
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                Explain a complicated piece of code.
                </p>
              </div>
                </a>
          </div>
        </div>




       
      </motion.div>
</motion.div>
  );
}

