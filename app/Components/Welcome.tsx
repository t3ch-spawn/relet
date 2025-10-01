import React from "react";
import GreenCard from "./reusables/GreenCard";
import robot from "@/public/welcome_robot.png";
import hand from "@/public/welcome_hand.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Welcome() {
  useGSAP(() => {
    gsap
      .timeline({ scrollTrigger: { trigger: ".hero-robot", start: "top 80%" } })
      .from(".hero-robot, .hero-robot-hand", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power1.inOut",
      })
      .from(
        ".hero-robot-hand",
        {
          keyframes: {
            "0%": { rotate: -40, ease: "power1.out" },
            "50%": { rotate: 80, ease: "power1.out" },
            "100%": { rotate: -40, ease: "power1.out" },
          },
          onComplete: () => {
            gsap.to(".hero-robot-hand", { rotate: 0 });
          },
          duration: 0.6,
          repeat: 2,
        },
        "<0.2"
      );
  });

  return (
    <section className="z-[12] relative flex max-[1024px]:flex-col-reverse justify-center items-center h-[100vh] px-[20px]">
      {/* Welcome robot */}
      {/* max-[1024px]:top-[0vh]  */}
      <div className="relative  flex items-start left-[20px] z-[3]">
        <Image
          src={robot}
          alt="robot"
          className="hero-robot object-contain max-w-[380px] max-[600px]:max-w-[220px] max-[1024px]:rotate-[-17deg] w-full"
        />
        <Image
          src={hand}
          alt="robot hand"
          className="hero-robot-hand object-contain max-w-[100px] max-[600px]:max-w-[70px] max-[1100px]:right-[30px] w-full relative max-[600px]:top-[30px] max-[600px]:right-[10px] top-[100px] "
        />
      </div>

      {/* Container for welcome box */}
      {/* top-[27vh] max-[1024px]:top-[6vh] */}
      <GreenCard
        className="relative  max-w-[690px] w-full "
        contentClass=" max-w-[690px] mx-auto w-full  pl-[54px] pr-[32px] py-[47px] max-[600px]:px-[33px]"
      >
        <h3 className="sub-heading max-[1024px]:mx-auto text-anim">Welcome!</h3>

        <p className=" mt-[20px] max-[600px]:text-center max-[600px]:text-[16px] text-anim">
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
