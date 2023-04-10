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
import CommunityCard from "./CommunityCard";
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

export default function CommunityPreview() {

  const [images, setimages] = useState(null);

  const getCommuntyImages = async () => {
      const docRef1 = await getDocs(collection(db, "CommunutyImages")).then(
          (querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setimages(newData)
console.log(newData)
          }
        );
    };

    useEffect(() => {
     getCommuntyImages();
    }, []);

  return (
    <>
 
      <motion.div variants={textVariant(0.75)}>
        <p className='mt-16 text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mx-auto'>Community</p>
      </motion.div>



      <div className='mt-20 mx-10 grid grid-cols-2 gap-10 lg:gap-16 lg:grid-cols-4 md:grid-cols-3'>
        {/* {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} />
        ))} */}

{images && images.map(img => (
    <CommunityCard 
    Image_Url={img.Image_Url}
    UserName={img.UserName}
    name={img.user_Name}
    />
))}
      </div>

    
    </>

  );
}


//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={textVariant(1.0)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.25 }}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px]'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-[#050816] rounded-[20px] min-h-[200px] flex justify-evenly items-center flex-col card1'
//       >
//         <img
//           src='https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg'
//           alt='web-development'
//           className='h-[200px] w-full rounded-[20px] '
//         />
//         <div class="content">
//         <p class="title mb-3">@user</p>
//     <ul class="sci justify-between cursor-pointer gap-64 mt-7">
//       <li>
//         <a>
//           <div>
//           <HeartIcon className="w-7 h-7 hover:transform hover:scale-105"/>
//         <p className="text-center mt-1">113</p>
//           </div>
 
//         </a>
//       </li>

//       <li>
//         <a>
//           <div>
//             <ChatBubbleOvalLeftEllipsisIcon className="w-7 h-7 hover:transform hover:scale-105"/>
//             <p className="text-center mt-1">113</p>
//           </div>
//         </a>
//       </li>
//     </ul>
//   </div>

//       </div>



 
//     </motion.div>
//   </Tilt>
// );


