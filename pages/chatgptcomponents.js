import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRef, useState } from "react";
import { Footer, Navbar } from "./compoent";
import ChatGPTComponents from './ChatGPT_Components/ChatGPTComponents';


export default function chatgptcomponents() {
  return (
    <div>    <div className="bg-[#050816] overflow-hidden">
       
    <Head>
      <title>Quest.IO</title>
      <meta
        name="description"
        content="Quest.IO is a platform that helps you to solve your problems and get answers to your questions."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/hmbiz2.appspot.com/o/herobg.png?alt=media&token=6153a9f3-e84d-4ba4-ac2f-55520b126bcd')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <ChatGPTComponents />
      </div>
 
      <Footer />
    
  </div></div>
  )
}
