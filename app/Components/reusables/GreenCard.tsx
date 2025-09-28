import React, { ReactNode } from "react";

export default function GreenCard({
  className,
  children,
  contentClass,
}: {
  className?: string;
  contentClass?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`border border-[#FFFFFF59] rounded-[20px] h-fit relative overflow-hidden ${className} `}
    >
      {/* Black background */}
      <div className="bg-black w-full h-full z-[2] absolute inset-0"></div>
      {/* Green gradient  */}
      <div className="h-full w-full z-[3] absolute inset-o green-gradient opacity-[0.15]"></div>

      <div className={`z-[4] relative text-[20px] ${contentClass}`}>
        {children}
      </div>
    </div>
  );
}
