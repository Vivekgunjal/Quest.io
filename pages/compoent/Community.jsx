import { HeartIcon } from '@heroicons/react/24/outline'
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
import CommunityCard from './CommunityCard';
import { useRouter } from "next/navigation";

export default function Community() {
    const router = new useRouter();
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
    <div className='p-7'>
<section className="   bg-center rounded-lg mb-9 backdrop-blur-3xl w-[60%]">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-purple-500 ">Visualize an idea in Click Of Button </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-700"> To Create An Image throgh Your Mind </p>
            <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-gradient-to-l from-green-500 to-purple-500 hover:opacity-50 cursor-pointer"
            onClick={() => router.push("/dalle")}
            >
                Create Your Image
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

        </div>               
    </div>
</section>


<div className='lg:text-5xl text-yellow-50 mb-7 underline text-3xl '>
    Community Showcase
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{images && images.map(img => (
    <CommunityCard 
    Image_Url={img.Image_Url}
    UserName={img.UserName}
    />
))}

</div>



</div>
  )
}
