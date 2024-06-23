import { useEffect, useState } from "react";

function Typing({ text, typingSpeed = 100, deletingSpeed = 50}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      setDisplayedText(prev => {
        if (isDeleting) {
          return text.substring(0, prev.length - 1);
        } else {
          return text.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayedText === text) {
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex(index + 1);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, index]);

  return (
    <div className="typewriting-effect-container">
      <h1>{displayedText}</h1>
    </div>
  );
}

function TypeWriting() {
  return (
    <div>
      <Typing text="Hello, World! Welcome to my site!" />
    </div>
  );
}

export default TypeWriting;
