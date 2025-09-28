"use client";

import React, { useEffect } from "react";
import masked_city from "@/public/masked_city.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MaskedCity() {
  return (
    <div className="max-w-[1200px] w-full mx-auto sticky top-[-25vh]">
      <Image
        src={masked_city}
        alt="city"
        className="masked_city max-w-[1200px] w-full h-full object-cover"
      />
      <MaskRectangle />
    </div>
  );
}

function MaskRectangle() {
    useGSAP(() => {
      gsap.fromTo(
        ".rect-top",
        {
          x: "20%",
        },
        {
          x: "-20%",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ".rect-middle",
        {
          x: "-33%",
        },
        {
          x: "33%",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1.3,
        }
      );

      gsap.fromTo(
        ".rect-bottom",
        {
          x: "28%",
        },
        {
          x: "-28%",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1.8,
        }
      );
    }, []);

  return (
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0 city-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id="rect-clip">
          <Rect className="rect-top" x="0.07" y="0.3" />
          <Rect className="rect-top" x="0.28" y="0.3" />
          <Rect className="rect-top" x="0.49" y="0.3" />
          <Rect className="rect-top" x="0.70" y="0.3" />

          {/* Middle rectangles */}
          <Rect className="rect-middle" x="0.07" y="0.41" />
          <Rect className="rect-middle" x="0.28" y="0.41" />
          <Rect className="rect-middle" x="0.49" y="0.41" />
          <Rect className="rect-middle" x="0.70" y="0.41" />

          {/* Bottom rectangles */}
          <Rect className="rect-bottom" x="0.28" y="0.52" />
          <Rect className="rect-bottom" x="0.49" y="0.52" />
          <Rect className="rect-bottom" x="0.07" y="0.52" />
          <Rect className="rect-bottom" x="0.70" y="0.52" />
        </clipPath>
      </defs>

     
    </svg>
  );
}

function Rect({
  x,
  y,
  className,
}: {
  x: string;
  y: string;
  className: string;
}) {
  const height = "0.09";
  const width = "0.2";
  useGSAP(() => {
    const svg = document.querySelector<SVGElement>(".city-svg");

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    rect.setAttribute("x", `${Number(x) * 100}%`);
    rect.setAttribute("y", `${Number(y) * 100}%`);
    rect.setAttribute("height", `${Number(height) * 100}%`);
    rect.setAttribute("width", `${Number(width) * 100}%`);
    rect.setAttribute("stroke", `#15CC5D`);
    rect.setAttribute("rx", `1%`);
    rect.classList.add(className);

    svg?.appendChild(rect);
  }, []);

  return (
    <rect
      x={x}
      y={y}
      className={className}
      width={width}
      height={height}
      rx="0.01"
      ry="0.01"
      stroke="#15CC5D"
    />
  );
}
