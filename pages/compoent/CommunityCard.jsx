"use client";
import { motion } from "framer-motion";
import styles from "../../styles";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
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
import { db } from "../../firebase/firebase";
import { useSession, signIn, signOut } from "next-auth/react";

export default function CommunityCard({ id, Image_Url, UserName, name }) {
  const { data: session } = useSession();
  const [likes, setlikes] = useState(true);
  const [getLikes, setgetLikes] = useState([]);
  const [getLikeNumber, setgetLikeNumber] = useState(null);

  const getLikeImages = async () => {
    const docRef1 = await getDocs(
      collection(db, "CommunutyImages", id, "likes")
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setgetLikes(newData);
      setgetLikeNumber(newData.length);
      console.log(newData.length);
      if (
        newData.findIndex((like) => like.id === session?.user?.email) !== -1
      ) {
        setlikes(false);
      }
    });
  };

  useEffect(() => {
    getLikeImages();
  }, [likes]);

  const likePost = async () => {
    await setDoc(doc(db, "CommunutyImages", id, "likes", session.user.email), {
      UserName: session.user.email,
    });
    setlikes(false);
  };
  const deletePost = async () => {
    await deleteDoc(
      doc(db, "CommunutyImages", id, "likes", session.user.email)
    );
    setlikes(true);
  };

  useEffect(() => {
    setgetLikeNumber(getLikes.length);
  }, [getLikes]);

  return (
    <div className="">
      <img
        className="h-[30vh] w-[100%] rounded-lg blur-sm hover:blur-none transition duration-500 ease-in-out"
        src={Image_Url}
        alt=""
      />
      <div className="flex justify-between lg:px-2 text-yellow-50 lg:text-2xl text-xl pt-2 ">
        <div className="flex gap-3">
          <img
            className="h-8 w-8 rounded-full"
            src={Image_Url}
            alt="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
          />
          <h1 className="text-[1rem] truncate text-white">{UserName}</h1>
        </div>
        <div className="flex flex-col">
          {/* <HeartIcon className='w-6 h-6 transform transition duration-500 hover:scale-125' onClick={likePost}/> */}
          {session ? (<>
            {!likes ? (
            <HeartIcon
              className="w-6 h-6 text-red-700 fill-red-700 transform transition duration-500 hover:scale-125"
              onClick={deletePost}
            />
          ) : (
            <HeartIcon
              className="w-6 h-6 transform transition duration-500 hover:scale-125"
              onClick={likePost}
            />
          )}
          </>):(<>
            <HeartIcon
              className="w-6 h-6 transform transition duration-500 hover:scale-125"
              onClick={() => signIn()}
            />
          </>)}
     
          {getLikeNumber ? (
            <p className="text-sm mx-auto text-white ">{getLikeNumber}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
