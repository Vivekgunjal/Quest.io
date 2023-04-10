'use client';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useState, useEffect } from 'react';

const Typewriter = ({ text, scrollToView, containerRef }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, index));
      setIndex((prevIndex) => prevIndex + 1);
    }, 30);

    return () => clearInterval(intervalId);
  }, [text, index]);

  return (
    <>
         <Editor
          value={displayText}
          onValueChange={false}
          readOnly
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
          }}
          className="p-6 w-full h-[70vh] placeholder-white placeholder-opacity-50 rounded-md resize-none focus:outline-none focus:border-transparent bg-[#0d1117] text-white"
        />
        
        <h1>{displayText}</h1></>
 
  );
};

export default Typewriter;