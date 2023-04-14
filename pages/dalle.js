import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRef, useState } from "react";
import { Footer, Navbar } from "./compoent";
import Banner from "./compoent/Banner";
import Code_Main from "./compoent/Code_Main";
import CommunityPreview from "./compoent/CommunityPreview";
import DallE_Image from './DallE_Component/DallE_Image';

export default function dalle() {
  return (
    <div className="bg-[#050816] overflow-hidden">
       
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
        <Banner />
        </div>
        <DallE_Image />
        <Footer />
      
    </div>
  )
}
