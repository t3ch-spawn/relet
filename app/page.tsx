"use client";

import Image from "next/image";
import stars from "@/public/starsky.png";
import moon from "@/public/moon.png";
import logo from "@/public/logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import RoadBuildings from "./Components/RoadBuildings";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".buildings-cont",
          toggleActions: "play none none reverse",
          start: "top 90%",
        },
      })
      .to(".welcome", {
        ease: "power1.inOut",
        opacity: 0,
      })
      .to(
        ".moon",
        {
          y: "-10%",
          ease: "power1.inOut",
        },
        "<"
      );


  });

  return (
    <main className="stem w-full">
      <div className="w-full h-[100vh] relative overflow-hidden text-white flex justify-center items-center">
        {/* Background star */}
        <Image
          src={stars}
          alt="stars"
          className="fixed w-full h-full z-[2] object-cover"
        />
        <Image
          src={moon}
          alt="moon"
          className="fixed z-[3] object-cover object-right translate-y-[20%] moon"
        />

        {/* Container for welcome and scroll to enter */}
        <div className="flex gap-[32px] relative z-[3] right-[100px] welcome">
          <Image src={logo} alt="logo" />

          {/* Container for text */}
          <div>
            <h1 className="text-[100px] leading-[100%] font-medium">
              Welcome
            </h1>
            <p className="text-[50px] leading-[100%]">
              Scroll to Enter
            </p>
          </div>
        </div>
      </div>

      <RoadBuildings/>
    </main>
  );
}
