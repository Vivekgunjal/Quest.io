import React, { useState } from 'react'

export default function DallE_Image() {
    const [image, setImage] = useState(null);
    const [loader, setloader] = useState(false);
    const [prompt, setPrompt] = useState('Synthwave halloween formula 1 car racing on a night road in Singapore');

    const sendPrompt = async () => {
        
        setImage(null);
        if(!prompt) return;
        setloader(true);
        const input = prompt.trim();

    
        const result = await fetch("api/DalleApi", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: prompt,
            }),
          }).then(response => response.json())
          .then(data => {
            setImage(data.res);
            console.log(data.res)
            setloader(false);
          })
          .catch(error => console.error(error));

      };


  return (
    <div>
        
  
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative mx-[5rem] lg:mx-96 md:mx-56">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-transparent placeholder:text-slate-500 focus:bg-transparent" placeholder="Enter Prompt" spellCheck="false"
            autoCorrect="false"/>
        <button class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={sendPrompt}
        >Generate</button>
    </div>


{image ? (
    <div className='flex justify-center mt-16 mx-6'>
    <img className="h-auto w-full max-w-[44.7rem] rounded-lg max-h-[29.5rem] min-h-[18.8rem]" src={image} alt="image description" />
    </div>
):(<>
    <div className='flex justify-center mt-16 mx-6'>
    <div className=' bg-transparent h-auto w-full max-w-[44.7rem] rounded-lg max-h-[29.5rem] min-h-[18.8rem] border border-zinc-900'>
        {loader ? (<>
            <div class="loader">
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
</div>
        </>):null}

    </div>
    
    </div>
</>)}




   


    

<div className='mt-10 flex justify-center'>
<a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Share in Community</span>
</a>
</div>
    </div>
  )
}
