import React from "react";
import GreenCard from "./reusables/GreenCard";
import rokcet_btn from "@/public/rocket_btn.svg";
import rokcet_launch from "@/public/rocket_launch.png";
import apply_robot from "@/public/apply_robot.png";
import Image from "next/image";
import MaskedCity from "./MaskedCity";

export default function Kickstart() {
  return (
    <section className="h-[300vh] flex flex-col gap-[40px] justify-center relative z-[12] px-[20px]">
      <MaskedCity />

      <div className="flex w-full top-[40vh] justify-center items-end gap-[40px] sticky max-[1024px]:flex-col max-[1024px]:items-center">
        <GreenCard
          className=""
          contentClass="max-w-[620px] px-[45px] pb-[44px] pt-[38px] max-[600px]:p-[28px]"
        >
          <h3 className="sub-heading max-[600px]:text-[30px] max-[1024px]:mx-auto w-fit max-[1024px]:mb-[20px]">
            Kickstart Properties
          </h3>

          <p className="mt-[15px] max-[1024px]:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </GreenCard>

        {/* White space to separate kickstart greenbox and launch on relet on mobile */}
        <div className="whitespace hidden max-[1024px]:block"></div>

        {/* Container for "launch on relet" */}
        <div className="w-[97%] h-fit relative max-w-[520px] flex flex-col items-center text-center">
          <Image src={apply_robot} alt="robot" className="max-w-[270px]" />
          <h3 className="text-[42px] max-[1024px]:hidden">Launch on Relet</h3>
          <h3 className="sub-heading  hidden max-[1024px]:block max-[600px]:text-[30px] mb-[20px] mx-auto w-fit">
            Launch on Relet
          </h3>

          <p className="text-[15px] max-[600px]:max-w-[200px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>

          <button className="text-black w-[200px] font-[500] h-[45px] bg-[#15CC5D] flex justify-center items-center gap-[12px] rounded-[15px] mt-[20px] max-[600px]:rounded-full">
            Apply for Launch
            <Image src={rokcet_btn} alt="rocket" className="max-w-[20px]" />
          </button>

          {/* Container for rocket with flames */}
          <Image
            src={rokcet_launch}
            alt="rocket"
            className="absolute rotate-[-32deg] max-[1024px]:rotate-0 max-[1024px]:right-[50%] max-[1024px]:translate-x-[50%] max-[1024px]:top-[-60%] w-full max-w-[130px] right-[10%] top-[-45%] max-h-[260px] object-contain "
          />
        </div>
      </div>
    </section>
  );
}
