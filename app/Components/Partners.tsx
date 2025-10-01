import React, { useState } from "react";
import logo from "@/public/partner_svg.svg";
import GreenCard from "./reusables/GreenCard";
import Image, { StaticImageData } from "next/image";
import partner1_bg from "@/public/partner1_bg.png";
import partner2_bg from "@/public/partner2_bg.png";
import partner3_bg from "@/public/partner3_bg.png";
import partner1_building from "@/public/partner1_building.png";
import partner3_building from "@/public/partner3_building.png";
import partner2_building from "@/public/partner2_building.png";
import arr_left from "@/public/arr_left.svg";
import arr_right from "@/public/arr_right.svg";
import fingerprint from "@/public/fingerprint.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface TPartner {
  heading: string;
  bg: StaticImageData;
  building: StaticImageData;
  name: string;
  link: string;
  buildingClass?: string;
  className?: string;
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
      buildingClass:
        "h-full w-full object-cover scale-[1.2] left-[35px] top-[40%]",
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
  const partnerListMob: TPartner[] = [
    {
      heading: "Metaverse",
      bg: partner1_bg,
      building: partner1_building,
      name: "Lorem ipsum",
      link: "www.loremipsum.com",
      className: "partnerCard",
    },
    {
      heading: "Industry",
      bg: partner2_bg,
      building: partner2_building,
      name: "Lorem ipsum",
      link: "www.loremipsum.com",
      buildingClass:
        "h-full w-full object-cover scale-[1.2] max-[1024px]:scale-[1] left-[35px]",
      className: "partnerCard",
    },
    {
      heading: "Real Estate",
      bg: partner3_bg,
      building: partner3_building,
      name: "Lorem ipsum",
      link: "www.loremipsum.com",
      buildingClass: "h-full w-full object-cover",
      className: "partnerCard",
    },
  ];

  //   Animating cards in
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: { trigger: ".partner-cards-cont", start: "top 77%" },
      })
      .from(".partner-card", {
        opacity: 0,
        bottom: "-50%",
        stagger: 0.17,
      })
      .from(".partner-card-building", {
        opacity: 0,
        y: "50%",
        stagger: 0.17,
      });
  });

  //   Place cards in their place on load
  useGSAP(() => {
    const allPartnerCards = document.querySelectorAll<Element>(".partnerCard");
    allPartnerCards.forEach((card, idx) => {
      const width = card.getBoundingClientRect().width - 40;

      gsap.set(card, { x: `${idx * width}px`, duration: 10 });

      if (idx === 1) {
        gsap.set(card, { zIndex: 7, y: 30 });
      } else {
        gsap.set(card, { zIndex: 4 });
      }
    });
  }, []);
  //   The card whose index equals the count will have the largest z-index
  // At first move everything to the right
  // The card to move to the extreme right is gotten by adding 1 to the index of the next card, so basically, 2 plus the current card
  // Get the idx of the current card
  // Add 1 to that, to be the next card, also if this addition is equal to list length, return 0
  // Add 1 to that to check it against the length of the list, also if this addition is equal to list length, return 0

  const [btnDisable, setBtnDisable] = useState(false);

  function translateCards(direction: any) {
    const allPartnerCards = document.querySelectorAll<Element>(".partnerCard");
    let currentCard: number;
    let nextCard;
    let cardToMove;

    allPartnerCards.forEach((card, idx, array) => {
      const width = card.getBoundingClientRect().width - 40;
      const transform = window.getComputedStyle(card).transform;
      const matrix = new DOMMatrixReadOnly(transform);
      const xValue = matrix.m41;
      const sliderLength = array.length;

      setBtnDisable(true);

      if (xValue === width) {
        currentCard = idx;
      }

      nextCard = currentCard + 1 == sliderLength ? 0 : currentCard + 1;
      let prevCard = currentCard - 1 == -1 ? sliderLength - 1 : currentCard - 1;

      if (direction == "right") {
        gsap.set(allPartnerCards[nextCard], { zIndex: 7 });
        gsap.to(allPartnerCards[nextCard], { y: 30 });
      } else {
        gsap.set(allPartnerCards[prevCard], { zIndex: 7 });
        gsap.to(allPartnerCards[prevCard], { y: 30 });
      }

      if (idx == nextCard || idx == prevCard) {
      } else {
        gsap.set(card, { zIndex: 4 });
        gsap.to(card, { y: 0 });
      }

      if (direction == "right") {
        cardToMove = nextCard + 1 == sliderLength ? 0 : nextCard + 1;
      } else {
        cardToMove = prevCard - 1 == -1 ? sliderLength - 1 : prevCard - 1;
      }

      gsap.set(allPartnerCards[cardToMove], { zIndex: 2 });

      gsap.to(allPartnerCards[cardToMove], {
        x: `${direction == "right" ? width * 2 : 0}px`,
        duration: 0.7,
        ease: "power1.inOut",
        onComplete: () => {
          setBtnDisable(false);
        },
      });

      if (idx != cardToMove) {
        gsap.to(card, {
          x: `${direction == "right" ? xValue - width : xValue + width}px`,
          duration: 0.7,
          ease: "power1.inOut",
          onComplete: () => {
            setBtnDisable(false);
          },
        });
      }
    });
  }
  return (
    <section className="w-full mt-[40vh] relative z-[12] overflow-hidden">
      {/* Container for partners heading and Green card containing partner cards */}
      <div className="flex flex-col gap-[15px] items-start max-[1024px]:items-center w-full max-w-[1100px] mx-auto sticky top-[7vh]">
        {/* Partner heading */}
        <div className="flex justify-center items-center gap-[20px] ml-[3vw]">
          <Image
            className="max-w-[40px] max-[600px]:hidden partner-card"
            src={logo}
            alt="logo"
          />
          <h2 className="sub-heading max-[600px]:hidden text-anim">Partners</h2>
          <h2 className="text-[42px] hidden max-[600px]:block mb-[12px]">
            Partners
          </h2>
        </div>

        {/* Container for partner cards */}
        <GreenCard
          className="w-[90%] mx-auto max-[1024px]:min-h-[750px]"
          contentClass=" px-[48px] pt-[80px] py-[70px] max-[600px]:py-[40px] max-[600px]:px-[0px] partner-cards-cont relative"
        >
          <div className="flex justify-between gap-[15px] items-center max-[1024px]:hidden">
            {partnerList.map((partner) => (
              <PartnerCard {...partner} />
            ))}
          </div>

          {/* Logo showing on mobile */}
          <Image
            className="max-w-[80px] w-full hidden max-[600px]:block mx-auto"
            src={logo}
            alt="logo"
          />

          {/* Carousel of cards for mobile */}
          <div className="relative hidden max-[1024px]:block overflow-hidden min-h-[600px] min-w-[910px] left-[54%] translate-x-[-50%] mx-auto partner-slider">
            {/* Dummy partnerCard */}
            <PartnerCard
              {...partnerList[0]}
              className="max-[1024px]:!relative opacity-0 pointer-none:"
            />

            {partnerListMob.map((partner) => (
              <PartnerCard {...partner} />
            ))}
          </div>

          {/* Container for scroll right and left */}

          <div className="max-[1024px]:flex hidden justify-center items-center gap-[30px] mt-[-60px] z-[12] relative">
            {/* Left btn */}
            <button
              onClick={() => {
                translateCards("left");
              }}
              disabled={btnDisable}
            >
              <Image src={arr_left} alt="left" />
            </button>

            <Image src={fingerprint} alt="fingerprint" />

            {/* Right btn */}
            <button
              onClick={() => {
                translateCards("right");
              }}
              disabled={btnDisable}
            >
              <Image src={arr_right} alt="right" />
            </button>
          </div>
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
  className,
}: TPartner) {
  return (
    <div
      className={`flex flex-col items-start  max-[1024px]:items-center w-[97%] max-w-[350px] max-[1024px]:max-w-[324px] max-[1024px]:absolute max-[1024px]:inset-0 relative partner-card ${className}`}
    >
      {/* Heading */}
      <h3 className="text-anim text-[42px] max-[600px]:text-[32px] max-[600px]:mb-[20px] leading-[100%]">
        {heading}
      </h3>

      {/* Container for 'bg' image and building */}
      <div className=" mt-[10px] w-[95%] h-[290px]  relative">
        <Image
          src={bg}
          className="partner-bg w-full h-full object-cover border-[#FFFFFF80] border rounded-[10px]"
          alt="background"
        />
        <Image
          src={building}
          className={`absolute partner-card-building  center-y z-[3] ${buildingClass}`}
          alt="building"
        />
      </div>

      <p className="text-[20px] text-[#15CC5D] font-medium mt-[14px] max-[600px]:mt-[50px]">
        {name}
      </p>

      {/* site */}
      <a href="#" className="underline text-[12px] mt-[5px] tracking-tight">
        {link}
      </a>
    </div>
  );
}

// Normal carousel

//   <Carousel
//     opts={{
//       loop: true,
//     }}
//     setApi={setApi}
//     className="hidden max-[1024px]:block max-w-[300px] mx-auto"
//   >
//     <CarouselContent>
//       {partnerList.map((partner) => {
//         return (
//           <CarouselItem className="">
//             <PartnerCard {...partner} />
//           </CarouselItem>
//         );
//       })}
//     </CarouselContent>
//     <CarouselPrevious />
//     <CarouselNext />
//   </Carousel>
