"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles";
import { navVariants } from "../../utils/motion";
import { useSession, signIn, signOut } from "next-auth/react"
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "#" },
  { name: "History", href: "#" },
  { name: "Bookings", href: "#" },
];

export default function Navbar() {
  const router = new useRouter();
  const { data: session } = useSession();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[90%] inset-0 gradient-01 -z-50"/>
      <Disclosure as="nav" className="z-[50]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#33B74B] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-auto">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-6 w-auto lg:hidden text-black"
                      src="/menu.svg"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-6 w-auto lg:block"
                      src="/menu.svg"
                      alt="Your Company"
                    />
                  </div>
                  {/* text-[#131514] */}
                  <div className="hidden sm:ml-6 sm:block mx-auto">
                    <div className="flex space-x-4">
                      <div
                        className="text-[#EEEEEE]  hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:text-white px-3 py-2 rounded-md font-extrabold text-[20px] leading-[20px] cursor-pointer"
                        onClick={() => router.push("/")}
                      >
                        Home
                      </div>
                      <div
                        className="text-[#EEEEEE]  hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:text-white px-3 py-2 rounded-md font-extrabold text-[20px] leading-[20px] cursor-pointer"
                        onClick={() => router.push("/chatgptcomponents")}
                      >
                        Code
                      </div>
                      <div
                        className="text-[#EEEEEE]  hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:text-white px-3 py-2 rounded-md font-extrabold text-[20px] leading-[20px] cursor-pointer"
                        onClick={() => router.push("/community")}
                      >
                        Community
                      </div>
                      <div
                        className="text-[#EEEEEE]  hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:text-white px-3 py-2 rounded-md font-extrabold text-[20px] leading-[20px] cursor-pointer"
                        onClick={() => router.push("/dalle")}
                      >
                      Image Generate
                      </div>
                     

                     
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm">
                        <span className="sr-only">Open user menu</span>
                        {session ? (
                          <div className="text-white flex items-center flex-col"
                          onClick={() => signOut()}
                          >
                          <img
                          className="h-8 w-8 rounded-full"
                          src={session.user?.image}
                          alt="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                          
                        />
                        <p className="mt-1 font-medium">{session && session.user.name}</p>
                        </div>
                        ):(
                          <div className="text-white flex items-center flex-col">
                          <UserCircleIcon className="text-white flex items-center h-8 w-8" onClick={() => signIn()}/>
                          <p>Sign Up</p>
                          </div>
                        )}
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden z-[50]">
              <div className="space-y-1 px-2 pt-2 pb-3">
                        <div 
                        className="text-[#EEEEEE]  hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:text-white px-3 py-2 rounded-md font-extrabold text-[20px] leading-[20px] cursor-pointer"
                        onClick={() => router.push("/")}
                      >
                      Home
                      </div>

                      <div
                        className="text-[#EEEEEE]  hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:text-white px-3 py-2 rounded-md font-extrabold text-[20px] leading-[20px] cursor-pointer"
                        onClick={() => router.push("/chatgptcomponents")}
                      >
                        Code
                      </div>
                      
                      <div
                        className="text-[#EEEEEE]  hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:text-white px-3 py-2 rounded-md font-extrabold text-[20px] leading-[20px] cursor-pointer"
                        onClick={() => router.push("/community")}
                      >
                        Community
                      </div>
                      <div
                        className="text-[#EEEEEE]  hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:text-white px-3 py-2 rounded-md font-extrabold text-[20px] leading-[20px] cursor-pointer"
                        onClick={() => router.push("/dalle")}
                      >
                        Generate Image
                      </div>

                      
                      
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </motion.nav>
  );
}
