import { useState, useEffect } from "react";

function AnimatedText({ text, className = "", speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // setDisplayedText("");

    text.split("").forEach((char, index) => {
      setTimeout(() => {
        setDisplayedText((prev) => prev + char);
      }, index * speed);
    });
  }, [text, speed]);

  return <p className={className}>{displayedText}</p>;
}

export default AnimatedText;
