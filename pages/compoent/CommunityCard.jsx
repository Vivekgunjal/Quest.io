'use client';
import { motion } from "framer-motion";
import styles from "../../styles";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CommunityCard({Image_Url, UserName, name}) {
  const [likes, setlikes] = useState(false);
  return (

    <div>
    <img className="h-[30vh] w-[100%] rounded-lg" 
    src={Image_Url} 
    alt=""/>
    <div className='flex justify-between lg:px-2 text-yellow-50 lg:text-2xl text-xl pt-2 '>
        <div className='flex gap-3'>
        <img
                      className="h-8 w-8 rounded-full"
                      src={Image_Url}
                      alt="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                    />
                     <h1 className="text-[1rem] truncate">{UserName}</h1>
        </div>
       <div className="flex flex-col">
        {likes ? (
           <HeartIcon className='w-6 h-6 transform transition duration-500 hover:scale-125' onClick={() => setlikes(false)}/>
        ):(
          <HeartIcon className='w-6 h-6 text-red-700 fill-red-700 transform transition duration-500 hover:scale-125' onClick={() => setlikes(true)}/>
        )}
        <p className="text-sm mx-auto">1</p>
        </div>
    </div>
</div>
  )
}
