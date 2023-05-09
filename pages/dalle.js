import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRef, useState } from "react";
import Banner from "./compoent/Banner";
import Code_Main from "./compoent/Code_Main";
import CommunityPreview from "./compoent/CommunityPreview";
import DallE_Image from './DallE_Component/DallE_Image';
import Navbar from "./compoent/Navbar";
import Footer from "./compoent/Footer";


export default function dalle() {
  return (
    <>
        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/hmbiz2.appspot.com/o/herobg.png?alt=media&token=6153a9f3-e84d-4ba4-ac2f-55520b126bcd')] bg-cover bg-no-repeat bg-center h-screen w-full fixed -z-50 ">
        
        </div>
      <Head>
        <title>Quest.IO</title>
        <meta
          name="description"
          content="Quest.IO- platform that helps you to solve your problems and get answers to your questions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
<Banner />
<DallE_Image />
<Footer />
     
     
      
    
    </>
  )
}


