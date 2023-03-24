"use client";
import { motion } from "framer-motion";
import styles from "../../styles";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
  fadeIn1,
} from "../../utils/motion";
import Tilt from "react-tilt";
import CommunityCard from "./CommunityCard";
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function CommunityPreview() {
  const services = [
    {
      title: "Web Developer",
      icon: 'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg',
    },
    {
      title: "React Native Developer",
      icon: 'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg',
    },
    {
      title: "Backend Developer",
      icon: 'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg',
    },
    {
      title: "Content Creator",
      icon: 'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg',
    },
  ];

  return (
    <>
 
      <motion.div variants={textVariant(0.75)}>
        <p className='mt-16 text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mx-auto'>Community</p>
      </motion.div>



      <div className='mt-20 mx-10 grid grid-cols-2 gap-10 lg:gap-16 lg:grid-cols-4 md:grid-cols-3'>
        {/* {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} />
        ))} */}
        <ServiceCard  index={1} />
        <ServiceCard  index={2} />
        <ServiceCard  index={3} />
      </div>

    
    </>
    // <motion.div
    //   variants={textVariant(1.0)}
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: true, amount: 0.25 }}
    // >
    //   <div class="mt-10">
    //     <h1 class="text-center text-2xl font-bold text-[#EEEEEE]">Community</h1>
    //   </div>

    //   <section class="py-10">
    //     <div class="mx-auto grid max-w-6xl  grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //       <CommunityCard />
    //     </div>
    //   </section>
    // </motion.div>
  );
}

const ServiceCard = ({ index }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={textVariant(1.0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#050816] rounded-[20px] min-h-[200px] flex justify-evenly items-center flex-col card1'
      >
        <img
          src='https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg'
          alt='web-development'
          className='h-[200px] w-full rounded-[20px] '
        />
        <div class="content">
        <p class="title mb-3">@user</p>
    <ul class="sci justify-between cursor-pointer gap-64 mt-7">
      <li>
        <a>
          <div>
          <HeartIcon className="w-7 h-7 hover:transform hover:scale-105"/>
        <p className="text-center mt-1">113</p>
          </div>
 
        </a>
      </li>

      <li>
        <a>
          <div>
            <ChatBubbleOvalLeftEllipsisIcon className="w-7 h-7 hover:transform hover:scale-105"/>
            <p className="text-center mt-1">113</p>
          </div>
        </a>
      </li>
    </ul>
  </div>

      </div>



 
    </motion.div>
  </Tilt>
);


