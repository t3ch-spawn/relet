import React from "react";
import GreenCard from "./reusables/GreenCard";
import laptop from "@/public/road_laptop.png";
import laptop_mob from "@/public/road_laptop_mob.png";
import token from "@/public/road_token.png";
import Image from "next/image";
import arr_left from "@/public/arr_left.svg";
import arr_right from "@/public/arr_right.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Roadmap() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: { trigger: ".roadmap-card", start: "top 47%" },
      })
      .from(".roadmap-item", {
        opacity: 0,
        y: 80,
        stagger: 0.1,
        duration: 0.7,
      })
      .from(
        ".roadmap-line",
        {
          scaleX: 0,
          transformOrigin: "center",
          ease: "power2.out",
          duration: 1,
        },
        "<"
      );
  });

  return (
    <section className="z-[12] relative px-[15px] mt-[40vh]">
      {/* top-[10vh] */}
      <div className="relative max-w-[1100px]  w-full mx-auto">
        <div className="flex justify-center gap-[55px] items-center w-full mx-auto">
          <h2 className="text-[80px] max-[1024px]:text-[65px] max-[500px]:text-[50px] font- leading-[100%] text-anim">
            Roadmap
          </h2>

          <div className="roadmap-line h-[3px] w-full bg-[#15CC5D] mt-[18px] max-[1024px]:hidden"></div>
        </div>

        {/* Green card for text and laptop */}
        <GreenCard
          className="w-[97%] max-w-[1100px] mx-auto mt-[20px] relative roadmap-card"
          contentClass="flex flex-col max-[1024px]:items-center gap-[30px] p-[50px] max-[600px]:p-[20px] max-w-[620px] max-[1024px]:mx-auto max-[1024px]:text-center"
        >
          <h3 className="sub-heading text-anim">Phase 1</h3>
          <p className="text-anim">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-anim">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="max-w-[350px] max-[1024px]:hidden text-anim">
            Duis aute irure dolor in reprehenderit in voluptate.
          </p>
          {/* Container for token and laptop for mobile view */}
          <div className="hidden relative w-fit p-[10px] mt-[20px] max-[1024px]:block">
            <Image
              className="max-w-[337px] w-full roadmap-item"
              src={laptop_mob}
              alt="laptop"
            />
            <Image
              className="max-w-[102px] center-x absolute top-0 translate-y-[-70%] roadmap-item"
              src={token}
              alt="laptop"
            />
          </div>
          {/* Container for arrows on mobile view */}
          <div className="max-[1024px]:flex gap-[20px] items-center justify-center mt-[18px] hidden ">
            <Image src={arr_left} alt="arrow" />

            <p>1 / 3</p>

            <Image src={arr_right} alt="arrow" />
          </div>
        </GreenCard>

        {/* Container for token and laptop for desktop view */}
        <div className="absolute w-fit bottom-[19%] right-[8%] z-[4] max-[1024px]:hidden">
          <Image
            className="max-w-[500px] max-[1100px]:max-w-[450px] w-full roadmap-item"
            src={laptop}
            alt="laptop"
          />
          <Image
            className="max-w-[220px] right-[-33%] max-[1240px]:right-[-15%] absolute center-y roadmap-item"
            src={token}
            alt="laptop"
          />
        </div>

        {/* Container for arrows on desktop view */}
        <div className="flex gap-[20px] items-center justify-end mt-[18px] mr-[40px] max-[1024px]:hidden roadmpa-item">
          <Image src={arr_left} alt="arrow" />

          <p>1 / 3</p>

          <Image src={arr_right} alt="arrow" />
        </div>
      </div>
    </section>
  );
}
