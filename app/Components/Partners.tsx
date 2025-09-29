import React from "react";
import logo from "@/public/partner_svg.svg";
import GreenCard from "./reusables/GreenCard";
import Image, { StaticImageData } from "next/image";
import partner1_bg from "@/public/partner1_bg.png";
import partner2_bg from "@/public/partner2_bg.png";
import partner3_bg from "@/public/partner3_bg.png";
import partner1_building from "@/public/partner1_building.png";
import partner3_building from "@/public/partner3_building.png";
import partner2_building from "@/public/partner2_building.png";

interface TPartner {
  heading: string;
  bg: StaticImageData;
  building: StaticImageData;
  name: string;
  link: string;
  buildingClass?: string;
}

export default function Partners() {
  const partnerList: TPartner[] = [
    {
      heading: "Metaverse",
      bg: partner1_bg,
      building: partner1_building,
      name: "Lorem ipsum",
      link: "www.loremipsum.com",
    },
    {
      heading: "Industry",
      bg: partner2_bg,
      building: partner2_building,
      name: "Lorem ipsum",
      link: "www.loremipsum.com",
      buildingClass: "h-full w-full object-cover scale-[1.2] left-[35px] top-[40%]",
    },
    {
      heading: "Real Estate",
      bg: partner3_bg,
      building: partner3_building,
      name: "Lorem ipsum",
      link: "www.loremipsum.com",
      buildingClass: "h-full w-full object-cover",
    },
  ];

  return (
    <section className="w-full h-[200vh] relative z-[12]">
      {/* Container for partners heading and Green card containing partner cards */}
      <div className="flex flex-col gap-[15px] items-start w-full max-w-[1100px] mx-auto sticky top-[7vh]">
        {/* Partner heading */}
        <div className="flex justify-center items-center gap-[20px] ml-[3vw]">
          <Image className="max-w-[40px]" src={logo} alt="logo" />
          <h2 className="sub-heading">Partners</h2>
        </div>

        {/* Container for partner cards */}
        <GreenCard
          className="w-full"
          contentClass="flex justify-between gap-[15px] items-center px-[48px] pt-[80px] py-[70px]"
        >
          {partnerList.map((partner) => (
            <PartnerCard {...partner} />
          ))}
        </GreenCard>
      </div>
    </section>
  );
}

function PartnerCard({
  heading,
  bg,
  building,
  name,
  link,
  buildingClass,
}: TPartner) {
  return (
    <div className="flex flex-col items-start w-[97%] max-w-[350px]">
      {/* Heading */}
      <h3 className="text-[42px] leading-[100%]">{heading}</h3>

      {/* Container for 'bg' image and building */}
      <div className=" mt-[10px] w-[95%] h-[290px]  relative">
        <Image
          src={bg}
          className="w-full h-full object-cover border-[#FFFFFF80] border rounded-[10px]"
          alt="background"
        />
        <Image
          src={building}
          className={`absolute  center-y z-[3] ${buildingClass}`}
          alt="building"
        />
      </div>

      <p className="text-[20px] text-[#15CC5D] mt-[14px]">{name}</p>

      {/* site */}
      <a href="#" className="underline text-[14px] mt-[5px]">
        {link}
      </a>
    </div>
  );
}
