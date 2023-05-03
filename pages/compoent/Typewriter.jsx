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
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
            width: "100%",
            height: "100%",
            overflow: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            position: "relative",
            zIndex: 1,
            


          }}
        />
</>
 
  );
};

export default Typewriter;