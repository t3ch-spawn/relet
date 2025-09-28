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

export default function Tokenized() {
  return (
    <section className="w-full h-[300vh] relative z-[12]">
      <div className="flex flex-col items-start max-w-[1100px] mx-auto sticky top-[20vh] ">
        <h2 className="sub-heading ml-[3vw]">Trade Tokenized Properties</h2>

        <GreenCard
          className="w-full mt-[18px]"
          contentClass="max-w-[500px] px-[40px] py-[60px]"
        >
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </GreenCard>

        {/* List of partner companies */}
        <div className="flex justify-start gap-[20px] items-center pl-[3vw] mt-[18px]">
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
        <div className="absolute right-[-5%] z-[4]">
          <Image src={token_city} className="max-w-[500px]" alt="city" />
          <Image className="max-w-[110px] z-[6] absolute left-0 center-y" src={m_city} alt="m" />
          <Image className="max-w-[110px] z-[5] absolute left-[16%] top-[46%] center-y" src={a_city} alt="a" />
          <Image className="max-w-[110px] z-[4] absolute left-[32%] center-y" src={r_city} alt="r" />
          <Image className="max-w-[110px] z-[3] absolute left-[47%] top-[52%] center-y" src={k_city} alt="k" />
          <Image className="max-w-[110px] z-[2] absolute left-[61%] top-[46%] center-y" src={e_city} alt="e" />
          <Image className="max-w-[110px] z-[1] absolute left-[78%] center-y" src={t_city} alt="t" />
        </div>
      </div>
    </section>
  );
}
