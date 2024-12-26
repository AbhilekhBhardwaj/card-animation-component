import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Card from './component/Card';
import './index.css';
import './App.css';

import { FaAppleAlt } from "react-icons/fa";
import { GiCutLemon } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { GiOrangeSlice } from "react-icons/gi";

const App = () => {
  const [selected, setSelected] = useState(0);
  const cardsRef = useRef([]);
  cardsRef.current = [];
  
  const cards = [
    {
      title: "APPLE",
      bgCardColor: "bg-[#CC1918]",
      bgColor: "#ff7070",
      textColor: "text-white",
      icon: <FaAppleAlt />,
    },
    {
      title: "LEMON",
      bgCardColor: "bg-[#fdff8f]",
      bgColor: "#f7e35b",
      textColor: "text-[#85822d]",
      icon: <GiCutLemon />,
    },
    {
      title: "BERRY",
      bgCardColor: "bg-[#FF2557]",
      bgColor: "#FF6286",
      textColor: "text-white",
      icon: <GiStrawberry />,
    },
    {
      title: "ORANGE",
      bgCardColor: "bg-[#FFBA36]",
      bgColor: "#f4a308",
      textColor: "text-white",
      icon: <GiOrangeSlice />,
    },
  ];

  const handleClick = (key) => {
    console.log("Selected card index:", key);
    setSelected(key);
  };

  const addToRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Add GSAP animation for background color change when card is clicked
    const body = document.body;

    if (selected === 0) {
      gsap.to(body, { backgroundColor: "#ff7070", duration: 1 });
    } else if (selected === 1) {
      gsap.to(body, { backgroundColor: "#f7e35b", duration: 1 });
    } else if (selected === 2) {
      gsap.to(body, { backgroundColor: "#FF6286", duration: 1 });
    } else if (selected === 3) {
      gsap.to(body, { backgroundColor: "#f4a308", duration: 1 });
    }
  }, [selected]);

  return (
    <div className="flex items-center justify-center h-screen">
      {cards.map((card, key) => (
        <div
          ref={addToRef}
          key={key}
          className={`h-96 cursor-pointer transition-all ease-in-out duration-[3000ms] ${key === selected ? "w-[550px]" : "w-20"}`}
          onClick={() => handleClick(key)}
        >
          <Card card={card} selected={selected} index={key} />
        </div>
      ))}
    </div>
  );
};

export default App;
