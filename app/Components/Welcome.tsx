import React from "react";
import GreenCard from "./reusables/GreenCard";
import robot from "@/public/welcome_robot.png";
import hand from "@/public/welcome_hand.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="z-[12] relative flex justify-center items-center h-[200vh]">
      {/* Welcome robot */}
      <div className="sticky top-[27vh] flex items-start min-w-fit left-[20px] z-[3]">
        <Image
          src={robot}
          alt="robot"
          className="object-contain max-w-[380px]"
        />
        <Image
          src={hand}
          alt="robot hand"
          className=" object-contain max-w-[100px] relative top-[100px] "
        />
      </div>

      {/* Container for welcome box */} 
      <GreenCard className="sticky top-[27vh]" contentClass=" max-w-[690px] pl-[54px] pr-[32px] py-[47px]">
        <h3 className="sub-heading">Welcome!</h3>

        <p className="text-[20px] mt-[20px]">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.”{" "}
        </p>
      </GreenCard>
    </section>
  );
}
