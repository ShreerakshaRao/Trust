import React from "react";

interface CardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  contentClassName?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  className = "",
  contentClassName = "",
  style,
}) => {
  return (
    <div className={`relative ${className}`} style={style}>
      <div className="rounded-xl overflow-hidden border-[10px] border-[#C19574] bg-[#C19574] h-full flex flex-col">
        <div className="bg-[#C19574] text-white p-5 font-medium text-base">
          {title}
        </div>

        <div
          className={`bg-[#FFF7F0] w-full px-8 py-11 rounded-b-xl text-3xl font-normal font-serif leading-10 flex-1 ${contentClassName}`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card;
