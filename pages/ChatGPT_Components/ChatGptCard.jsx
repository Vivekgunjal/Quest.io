'use client';
import { motion } from "framer-motion";
import styles from '../../styles';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2 } from '../../utils/motion'
import Typewriter from 'typewriter-effect';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HashtagIcon } from "@heroicons/react/24/outline";

 export default function ChatGptCard({data, icon, onClick}) {
  const { head, desc, color } = data;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };


  return (
    <div className="min-w-[15rem] max-w-[40rem] transform transition duration-500 hover:scale-95"
    
  >
  <a
      className="flex items-center rounded-lg shadow bg-transparent cursor-pointer"
      onClick={handleClick}
    >
         <div
      className={`rounded-md h-16 w-16 flex flex-col justify-center items-center ${color}`}
      >
        {icon}
        {/* <HashtagIcon className="w-6 h-6 text-white transform transition duration-500 hover:scale-125"/> */}
      </div>
            <div className="flex flex-col justify-between pl-4">
        <h5 className=" text-2xl font-bold tracking-tight text-white">
        {data.head}
        </h5>
        <p className="mb-3 font-normal text-gray-400 ">
        {data.desc}
        </p>
      </div>
        </a>
  </div>
  )
}


