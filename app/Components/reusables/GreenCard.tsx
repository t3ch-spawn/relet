import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { ReactNode, useRef } from "react";

export default function GreenCard({
  className,
  children,
  contentClass,
}: {
  className?: string;
  contentClass?: string;
  children: ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
      },
    });
  });

  return (
    <div
      ref={cardRef}
      className={`border border-[#FFFFFF59] rounded-[20px] min-h-fit relative overflow-hidden ${className} `}
    >
      {/* Black background */}
      <div className="bg-black w-full h-full z-[2] absolute inset-0 "></div>
      {/* Green gradient  */}
      <div className="h-full w-full z-[3] absolute inset-o green-gradient opacity-[0.15] "></div>

      <div
        className={`z-[4] relative text-[20px] max-[768px]:text-[16px] ${contentClass}`}
      >
        {children}
      </div>
    </div>
  );
}
