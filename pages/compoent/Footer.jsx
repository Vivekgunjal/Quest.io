'use client';
import React, { useEffect, useState } from "react";

export default function Footer() {
  return (
    <div className="bottom-0">
      
<footer class="p-4 bg-[#050816]  rounded-lg shadow md:px-6 md:py-8 mt-20" >
    <div class="sm:flex sm:items-center sm:justify-between">
        <a  class="flex items-center mb-4 sm:mb-0">
            <img src="/menu.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-purple-500">Quest.io</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©<a class="hover:underline text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-purple-500">Quest.io™</a>. All Rights Reserved.
    </span>
</footer>

    </div>
  )
}

