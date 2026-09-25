import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-black font-bold border-2 border-[#c79200] px-8 py-1 w-fit rounded transition-transform hover:brightness-110 duration-150 shadow-[0px_4px_0px_0px_#8a6500] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
