import React from "react";
import GreenCard from "./reusables/GreenCard";
import Image from "next/image";
import token_city from "@/public/token_city.png";
import m_city from "@/public/m_city.svg";
import a_city from "@/public/a_city.svg";
import r_city from "@/public/r_city.svg";
import k_city from "@/public/k_city.svg";
import e_city from "@/public/e_city.svg";
import t_city from "@/public/t_city.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Tokenized() {
  useGSAP(() => {
    gsap
      .timeline({ scrollTrigger: { trigger: ".diamond-city" } })
      .from(".diamond-city, .partner-company", {
        opacity: 0,
        y: 100,
        ease: "power1.inOut",
      })
      .from(".green-letter", {
        opacity: 0,
        x: 200,
        stagger: 0.1,
        ease: "power1.inOut",
      });
  });

  return (
    <section className="w-full  mt-[40vh] relative px-[20px] z-[12]">
      {/* top-[20vh]   */}
      <div className="flex flex-col items-start max-w-[1100px] mx-auto relative max-[1024px]:top-[10vh] ">
        <h2 className="sub-heading ml-[3vw] max-[1024px]:mx-auto max-[1024px]:text-center w-fit text-anim">
          Trade Tokenized Properties
        </h2>

        <GreenCard
          className="w-full mt-[18px] max-[1024px]:h-[80vh] max-[1024px]:min-h-[700px]"
          contentClass="max-w-[500px] px-[40px] py-[60px] max-[1024px]:p-[20px] max-[1024px]:justify-between max-[1024px]:text-center max-[1024px]:items-center max-[1024px]:mx-auto flex flex-col h-full"
        >
          <p className="text-anim">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <br />
          <p className="text-anim">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </GreenCard>

        {/* List of partner companies */}
        <div className="flex partner-company justify-start gap-[20px] items-center pl-[3vw] mt-[18px] max-[1024px]:hidden">
          <p>
            <span className="font-medium text-[#15CC5D]">P</span>artner{" "}
            <span className="font-medium">C</span>ompany
          </p>
          <p>
            <span className="font-medium text-[#FF0000]">P</span>artner{" "}
            <span className="font-medium">C</span>ompany
          </p>
          <p>
            <span className="font-medium text-[#15CC5D]">P</span>artner{" "}
            <span className="font-medium">C</span>ompany
          </p>
          <p>
            <span className="font-medium text-[#FF0000]">P</span>artner{" "}
            <span className="font-medium">C</span>ompany
          </p>
        </div>

        {/* Container for diamond city image and market letters */}
        <div className="absolute w-fit right-[-5%] max-[1240px]:right-0 max-[1024px]:translate-x-[-50%] max-[1024px]:left-[50%] max-[1024px]:translate-y-[-50%] max-[1024px]:top-[57%] z-[4] diamond-city overflow-hidden">
          <Image
            src={token_city}
            className="max-w-[500px] max-[1024px]:max-w-[320px] max-[500px]:max-w-[260px] max-[1024px]:mx-auto"
            alt="city"
          />
          <Image
            className="max-w-[110px] green-letter max-[1024px]:max-w-[70px] max-[500px]:max-w-[55px] z-[6] absolute left-[-1%] center-y"
            src={m_city}
            alt="m"
          />
          <Image
            className="max-w-[110px] green-letter max-[1024px]:max-w-[70px] max-[500px]:max-w-[55px] z-[5] absolute left-[16%] top-[46%] center-y"
            src={a_city}
            alt="a"
          />
          <Image
            className="max-w-[110px] green-letter max-[1024px]:max-w-[70px] max-[500px]:max-w-[55px] z-[4] absolute left-[32%] center-y"
            src={r_city}
            alt="r"
          />
          <Image
            className="max-w-[110px] green-letter max-[1024px]:max-w-[70px] max-[500px]:max-w-[55px] z-[3] absolute left-[47%] top-[52%] center-y"
            src={k_city}
            alt="k"
          />
          <Image
            className="max-w-[110px] green-letter max-[1024px]:max-w-[70px] max-[500px]:max-w-[55px] z-[2] absolute left-[61%] top-[46%] center-y"
            src={e_city}
            alt="e"
          />
          <Image
            className="max-w-[110px] green-letter max-[1024px]:max-w-[70px] max-[500px]:max-w-[55px] z-[1] absolute right-[-1%] center-y"
            src={t_city}
            alt="t"
          />
        </div>
      </div>
    </section>
  );
}
