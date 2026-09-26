"use client";

import React, { useState } from "react";

import { Plus } from "lucide-react";

import Typography from "../Typography";

type DropdownProps = {
  question: string;
  answer: string;
  finalHeightAnswer?: string;
  finalHeightQuestion?: string;
  fontSizeScaling?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  question,
  answer,
  finalHeightAnswer,
  finalHeightQuestion,
  fontSizeScaling,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const answerStyle = `absolute left-4 right-4 top-3 bottom-2 bg-[#1a1a1a] text-gray-200 border-x border-b border-white/10 rounded-t-xl z-1
            transition-all duration-200 ease-in
            transition-all duration-100 ${!isHover ? "-top-1" : "-top-2"}
            justify-center overflow-hidden`;
  const backgroundStyle = `absolute -top-5 left-0 right-0 bg-[#FFBE0D] rounded-t-2xl 
            border-t-2 border-l-2 border-r-2 border-[#555555] min-w-60 z-0
            transition-all duration-200 ease-in ${!isOpen ? "h-10" : finalHeightAnswer}`;

  const questionStyle = `relative bg-[#141414] rounded-2xl px-4 py-4 border-2 border-[#333333] hover:border-primary/50 min-h-[80px] min-w-60 z-10
            transition-all duration-200 ease-in ${!isOpen ? "mb-0 -bottom-0" : finalHeightQuestion} `;

  const typography = `pt-3 px-4 pb-2 transition-all ease-in duration-200 ${!isOpen ? "opacity-0" : "opacity-100"} ${fontSizeScaling}`;

  return (
    <div className=" relative w-full max-w-2xl mx-auto mb-4 mt-10 px-4 ">
      <div className="relative">
        <div>
          {/* Gold Tab */}
          <div
            className={`absolute -top-9 left-0 right-120 h-7 bg-[#FFBE0D] rounded-t-2xl 
            border-t-2 border-l-2 border-r-2 border-[#555555] min-w-20 z-1`}
          ></div>
          <div
            className={`absolute -top-4.5 left-0 right-10 h-3 bg-[#FFBE0D] border-l-2 border-[#555555] z-1 min-w-20`}
          ></div>
          <div className={backgroundStyle}>
            <div className={answerStyle}>
              <Typography.P className={`${typography} text-white/90 leading-relaxed`}>{answer}</Typography.P>
            </div>
          </div>
        </div>
        {/* Main Card */}
        <div
          className={questionStyle}
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="w-full flex items-center justify-between relative top-[0.4em] z-1 min-h-5 hover:cursor-pointer">
            <Typography.H6 className="  text-white">{question}</Typography.H6>
            <div>
              <Plus
                size={32}
                color="white"
                className={`relative -top-[0.3em] transition-transform duration-300 origin-center 
                ${!isHover ? "rotate-0" : "rotate-90"} ${!isOpen ? "rotate-0" : "rotate-135"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
