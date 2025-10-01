import React from "react";
import GreenCard from "./reusables/GreenCard";
import laptop from "@/public/road_laptop.png";
import laptop_mob from "@/public/road_laptop_mob.png";
import token from "@/public/road_token.png";
import Image from "next/image";
import arr_left from "@/public/arr_left.svg";
import arr_right from "@/public/arr_right.svg";

export default function Roadmap() {
  return (
    <section className="z-[12] relative h-[200vh] px-[15px]">
      <div className=" sticky top-[10vh]  max-w-[1100px]  w-full mx-auto">
        <div className="flex justify-center gap-[55px] items-center w-full mx-auto">
          <h2 className="text-[80px] max-[1024px]:text-[65px] max-[500px]:text-[50px] font- leading-[100%]">Roadmap</h2>

          <div className="h-[3px] w-full bg-[#15CC5D] mt-[18px] max-[1024px]:hidden"></div>
        </div>

        {/* Green card for text and laptop */}
        <GreenCard
          className="w-[97%] max-w-[1100px] mx-auto mt-[20px] relative"
          contentClass="flex flex-col max-[1024px]:items-center gap-[30px] p-[50px] max-[600px]:p-[20px] max-w-[620px] max-[1024px]:mx-auto max-[1024px]:text-center"
        >
          <h3 className="sub-heading">Phase 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <br /> <br />
            <p className="max-w-[350px] max-[1024px]:hidden">
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate.
            </p>
          </p>

          {/* Container for token and laptop for mobile view */}
          <div className="hidden relative w-fit p-[10px] mt-[20px] max-[1024px]:block">
            <Image className="max-w-[337px] w-full" src={laptop_mob} alt="laptop" />
            <Image
              className="max-w-[102px] center-x absolute top-0 translate-y-[-70%]"
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
            className="max-w-[500px] max-[1100px]:max-w-[450px] w-full"
            src={laptop}
            alt="laptop"
          />
          <Image
            className="max-w-[220px] right-[-33%] max-[1240px]:right-[-15%] absolute center-y"
            src={token}
            alt="laptop"
          />
        </div>

        {/* Container for arrows on desktop view */}
        <div className="flex gap-[20px] items-center justify-end mt-[18px] mr-[40px] max-[1024px]:hidden">
          <Image src={arr_left} alt="arrow" />

          <p>1 / 3</p>

          <Image src={arr_right} alt="arrow" />
        </div>
      </div>
    </section>
  );
}
