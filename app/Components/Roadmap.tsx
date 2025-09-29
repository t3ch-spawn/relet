import React from "react";
import GreenCard from "./reusables/GreenCard";
import laptop from "@/public/road_laptop.png";
import token from "@/public/road_token.png";
import Image from "next/image";
import arr_left from "@/public/arr_left.svg";
import arr_right from "@/public/arr_right.svg";

export default function Roadmap() {
  return (
    <section className="z-[12] relative h-[200vh]">
      <div className=" sticky top-[10vh]  max-w-[1100px]  w-full mx-auto">
        <div className="flex justify-start gap-[55px] items-center w-full mx-auto">
          <h2 className="text-[80px] font- leading-[100%]">Roadmap</h2>

          <div className="h-[3px] w-full bg-[#15CC5D] mt-[18px]"></div>
        </div>

        {/* Green card for text and laptop */}
        <GreenCard
          className="w-[97%] max-w-[1100px] mx-auto mt-[20px] relative"
          contentClass="flex flex-col gap-[30px] p-[50px] max-w-[620px]"
        >
          <h3 className="sub-heading">Phase 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <br /> <br />
            <p className="max-w-[350px]">
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate.
            </p>
          </p>
        </GreenCard>

        {/* Container for token and laptop */}
        <div className="absolute bottom-[7%] right-[19%] z-[4]">
          <Image className="max-w-[500px]" src={laptop} alt="laptop" />
          <Image
            className="max-w-[220px] right-[-27%] absolute center-y"
            src={token}
            alt="laptop"
          />
        </div>

        {/* Container for arrows */}
        <div className="flex gap-[20px] items-center justify-end mt-[18px] mr-[40px]">
          <Image src={arr_left} alt="arrow" />

          <p>1 / 3</p>

          <Image src={arr_right} alt="arrow" />
        </div>
      </div>
    </section>
  );
}
