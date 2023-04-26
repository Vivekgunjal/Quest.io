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
        />
</>
 
  );
};

export default Typewriter;