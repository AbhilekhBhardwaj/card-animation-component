import React from 'react';

const Card = ({ card , index , selected}) => {
  return (
    <div className="h-full relative">
      <div className={`h-full rounded-xl flex items-center justify-center ${card.bgCardColor}`}>
        <span className="text-white text-[1.5rem] absolute top-5 left-5">{card.icon}</span>
        <h1 
  className={`${card.textColor} ${selected === index ? "rotate-0 text-[8rem]" : "text-[2rem] rotate-90"} font-bold transition-transform duration-[3000ms] ease-in-out`}
>
  {card.title}
</h1>

      </div>
    </div>
  );
};

export default Card;
