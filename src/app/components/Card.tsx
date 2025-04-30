import React from "react";

interface CardProps {
  title: string;
  content: string;
  className?: string; // for optional size or layout classes
  style?: React.CSSProperties; // if parent wants to pass inline styles
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  className = "",
  style,
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-sm ${className}`}
      style={{
        border: "10px solid #C19574",
        backgroundColor: "#C19574",
        ...style,
      }}
    >
      <div className="bg-[#C19574] text-white p-5 font-medium text-base rounded-t-xl">
        {title}
      </div>

      <div className="bg-[#FFF7F0] h-full w-full px-8 py-11 text-3xl font-normal font-serif leading-10 ">
        {content}
      </div>
    </div>
  );
};

export default Card;
