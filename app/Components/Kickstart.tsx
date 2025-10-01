import React from "react";
import GreenCard from "./reusables/GreenCard";
import rokcet_btn from "@/public/rocket_btn.svg";
import rokcet_launch from "@/public/rocket_launch.png";
import apply_robot from "@/public/apply_robot.png";
import Image from "next/image";
import MaskedCity, { moveSvgClips } from "./MaskedCity";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Kickstart() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".launch-robot-container",
            start: "top 70%",
          },
        })
        .from(".launch-robot, .launch-btn", {
          opacity: 0,
          y: 60,
          ease: "power1.inOut",
        })
        .from(
          ".launch-rocket",
          {
            opacity: 0,
            y: 90,
            x: 90,
            ease: "power1.inOut",
            duration: 0.8,
            onComplete: () => {
              moveSvgClips();
            },
          },
          "<0.2"
        )
        .from(
          ".masked-city-cont",
          {
            opacity: 0,
            y: -60,
            duration: 0.7,
          },
          "<0.8"
        );
    });

    mm.add("(max-width: 1024px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".launch-robot-container",
            start: "top 70%",
          },
        })
        .from(".launch-robot, .launch-btn", {
          opacity: 0,
          y: 60,
          ease: "power1.inOut",
        })
        .from(
          ".launch-rocket",
          {
            opacity: 0,
            y: 90,
            ease: "power1.inOut",
            duration: 0.8,
          },
          "<0.2"
        );

      gsap.set(".rect-top", { x: "20%" });
      gsap.set(".rect-middle", { x: "-33%" });
      gsap.set(".rect-bottom", { x: "28%" });

      const allRects = document.querySelectorAll(".masked-city-cont .rect-mob");
      allRects.forEach((rect, idx, array) => {
        gsap.from(rect, {
          scaleX: (idx + 1) % 2 == 0 ? 0 : 0,
          //   x: (idx + 1) % 2 == 0 ? '-100%' : '100%',
          transformOrigin: "center",
          opacity: 0,
          duration: 0.7,
          ease: ".power1.inOut",
          delay: idx * 0.1,
          onComplete: () => {
            if (idx == array.length - 1) {
              moveSvgClips();
            }
          },
          scrollTrigger: {
            trigger: ".masked-city-cont",
            start: "top 57%",
          },
        });
      });
    });
  });

  return (
    <section className=" max-[1024px]:overflow-hidden flex flex-col gap-[40px] max-[1024px]:gap-[10px] h-[200vh] max-[1024px]:h-[initial] max-[1024px]:mt-[150px] justify-center relative z-[12] ">
      <MaskedCity />

      <div className="flex w-full top-[40vh] justify-center items-end gap-[40px] sticky max-[1024px]:flex-col max-[1024px]:items-center px-[20px]">
        <GreenCard
          className=""
          contentClass="max-w-[620px] px-[45px] pb-[44px] pt-[38px] max-[600px]:p-[28px]"
        >
          <h3 className="sub-heading max-[600px]:text-[30px] max-[1024px]:mx-auto w-fit max-[1024px]:mb-[20px] text-anim">
            Kickstart Properties
          </h3>

          <p className="mt-[15px] max-[1024px]:text-center text-anim">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </GreenCard>

        {/* White space to separate kickstart greenbox and launch on relet on mobile */}
        {/* <div className="whitespace hidden max-[1024px]:block"></div> */}

        {/* Container for "launch on relet" */}
        <div className="w-[97%] h-fit relative max-w-[520px] max-[1024px]:mt-[300px] flex flex-col items-center text-center launch-robot-container">
          <Image
            src={apply_robot}
            alt="robot"
            className="launch-robot max-w-[270px]"
          />
          <h3 className="text-[42px] max-[1024px]:hidden">Launch on Relet</h3>
          <h3 className="text-anim sub-heading  hidden max-[1024px]:block max-[600px]:text-[30px] mb-[20px] mx-auto w-fit">
            Launch on Relet
          </h3>

          <p className="text-anim text-[15px] max-[600px]:max-w-[200px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>

          <button className="launch-btn text-black w-[200px] font-[500] h-[45px] bg-[#15CC5D] flex justify-center items-center gap-[12px] rounded-[15px] mt-[20px] max-[600px]:rounded-full">
            Apply for Launch
            <Image src={rokcet_btn} alt="rocket" className="max-w-[20px]" />
          </button>

          {/* Container for rocket with flames */}
          <Image
            src={rokcet_launch}
            alt="rocket"
            className="launch-rocket absolute rotate-[-32deg] max-[1024px]:rotate-0 max-[1024px]:right-[50%] max-[1024px]:translate-x-[50%] max-[1024px]:top-[-60%] w-full max-w-[130px] right-[10%] top-[-45%] max-h-[260px] object-contain "
          />
        </div>
      </div>
    </section>
  );
}
