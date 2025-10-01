import React from "react";
import GreenCard from "./reusables/GreenCard";
import robot from "@/public/welcome_robot.png";
import hand from "@/public/welcome_hand.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="z-[12] relative flex max-[1024px]:flex-col-reverse justify-center items-center h-[200vh] px-[20px]">
      {/* Welcome robot */}
      <div className="sticky top-[27vh] max-[1024px]:top-[70vh]  flex items-start left-[20px] z-[3]">
        <Image
          src={robot}
          alt="robot"
          className="object-contain max-w-[380px] max-[600px]:max-w-[220px] max-[1024px]:rotate-[-17deg]  w-full"
        />
        <Image
          src={hand}
          alt="robot hand"
          className=" object-contain max-w-[100px] max-[600px]:max-w-[70px] max-[1100px]:right-[30px] w-full relative max-[600px]:top-[30px] max-[600px]:right-[10px] top-[100px] "
        />
      </div>

      {/* Container for welcome box */}
      <GreenCard
        className="sticky top-[27vh] max-w-[690px] w-full max-[1024px]:h-[83vh] max-[1024px]:top-[6vh]"
        contentClass=" max-w-[690px] mx-auto w-full  pl-[54px] pr-[32px] py-[47px] max-[600px]:px-[33px]"
      >
        <h3 className="sub-heading mx-auto">Welcome!</h3>

        <p className=" mt-[20px] max-[600px]:text-center max-[600px]:text-[16px]">
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
