import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRef, useState } from "react";
import { Footer, Navbar } from "./compoent";
import ChatGPTComponents from './ChatGPT_Components/ChatGPTComponents';
import CodConverter from './Models/CodConverter';
import CodeExplain from './Models/CodeExplain';

export default function codeexplain() {
  return (
    <div>    <div className="bg-[#050816] overflow-hidden">
       
    <Head>
      <title>Quest.IO- platform that helps you to solve your problems and get answers to your questions</title>
      <meta
        name="description"
        content="Quest.IO- platform that helps you to solve your problems and get answers to your questions"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/hmbiz2.appspot.com/o/herobg.png?alt=media&token=6153a9f3-e84d-4ba4-ac2f-55520b126bcd')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <CodeExplain />
      </div>
 
      <Footer />
    
  </div></div>
  )
}
