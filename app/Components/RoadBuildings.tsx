"use client";

import { useGSAP } from "@gsap/react";
import React from "react";
import rocksRoad from "@/public/rocksRoad.png";
import heroRobot from "@/public/heroRobot.svg";
import fadeLogo from "@/public/fadeLogo.svg";
import gate from "@/public/gate.png";
import building1 from "@/public/building1.png";
import building2 from "@/public/building2.png";
import building3 from "@/public/building3.png";
import building4 from "@/public/building4.png";
import building5 from "@/public/building5.png";
import building6 from "@/public/building6.png";
import building7 from "@/public/building7.png";
import cloudright from "@/public/cloudright.png";
import cloudleft from "@/public/cloudleft.png";
import topcloud from "@/public/topcloud.png";
import bank from "@/public/bank.png";
import rocket from "@/public/rocket.png";
import plant1 from "@/public/plants1.png";
import plant2 from "@/public/plants2.png";
import central_office from "@/public/central_office.png";
import Image from "next/image";
import gsap from "gsap";

export default function RoadBuildings() {
  useGSAP(() => {
    gsap.set(".building", { y: "20%" });
    gsap.set(".cloudleft", { x: "-10%" });
    gsap.set(".cloudright", { x: "10%" });
    gsap.set(".top-cloud", { y: "20%" });
    gsap.set(".market", { y: "20%" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".buildings-cont",
          toggleActions: "play none none none",
          start: "top 10%",
          onLeaveBack: () => {
            gsap.to(".buildings-cont", {
              opacity: 0,
              duration: 0.6,
              ease: "power1.inOut",
            });
          },
          onEnter: () => {
            gsap.to(".buildings-cont", {
              opacity: 1,
              duration: 0.6,
              ease: "power1.inOut",
            });
          },
        },
      })
      .to(".buildings-cont", {
        opacity: 1,
        duration: 0,
      })
      .to(".rocks", {
        opacity: 1,
      })
      .to(".heroRobot", {
        duration: 1.2,
        keyframes: {
          "0%": { opacity: 0 },
          "20%": { opacity: 1, ease: "power1.inOut" },

          "80%": { opacity: 1 },
          "100%": { opacity: 0, ease: "power1.inOut" },
        },
      })
      .to(
        ".fade-logo",
        {
          duration: 1.2,
          keyframes: {
            "0%": { opacity: 0 },
            "20%": { opacity: 1, ease: "power1.inOut" },
            "50%": { scale: 1 },
            "80%": { opacity: 1 },
            "100%": { opacity: 0, ease: "power1.inOut" },
          },
        },
        "<1"
      )
      .to(".gate", { opacity: 1 })
      .to(".building", { y: 0, stagger: 0.2, opacity: 1 }, "<0.1")
      .to(".cloudright", {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power1.inOut",
      })
      .to(
        ".cloudleft",
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".topcloud",
        {
          opacity: 1,
          duration: 0.7,
          ease: "power1.inOut",
          y: 0,
        },
        "<"
      )
      .to(
        ".market",
        {
          y: 0,
          opacity: 1,
        },
        "<0.7"
      )
      .to(".central_office", {
        opacity: 1,
      })
      .to(".central_office", {
        delay: 2,
        opacity: 0,
      });

    gsap.to(".buildings-overlay", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".white-2",
        start: "top 90%",
        end: "top 30%",
        scrub: true,
      },
    });
  });
  return (
    // Container for buildings, road and trees
    <div className="h-[100vh] w-full buildings-cont opacity-0 relative z-[3]">
      {/* Robot */}
      {/* <Image
        src={heroRobot}
        alt="robot"
        className="opacity-0 fixed center-x left-[49.5%] bottom-[60px] z-[8] heroRobot"
      /> */}

      {/* Logo that fades in after robot */}
      {/* <Image
        src={fadeLogo}
        alt="robot"
        className="opacity-0 fixed center-x left-[49.5%] bottom-[80px] z-[8] fade-logo scale-75"
      /> */}

      {/* <Image
        src={gate}
        alt="gate"
        className="gate z-[6] bottom-0 fixed  object-cover opacity-0"
      />
      <Image
        src={building1}
        alt="building"
        className="building z-[6] bottom-0 fixed  object-cover opacity-0"
      /> */}
      {/* <Image
        src={building2}
        alt="building"
        className="building z-[5] bottom-0 fixed  object-cover opacity-0"
      />
      <Image
        src={building3}
        alt="building"
        className="building z-[4] bottom-0 fixed  object-cover opacity-0"
      />
      <Image
        src={building4}
        alt="building"
        className="building z-[3] bottom-0 fixed  object-cover opacity-0"
      />
      <Image
        src={building5}
        alt="building"
        className="building z-[4] bottom-0 fixed  object-cover opacity-0"
      /> */}
      {/* <Image
        src={building6}
        alt="building"
        className="building z-[3] bottom-0 fixed  object-cover opacity-0"
      />
      <Image
        src={building7}
        alt="building"
        className="building z-[4] bottom-0 fixed  object-cover opacity-0"
      />
      <Image
        src={plant1}
        alt="plant"
        className="building z-[7] bottom-0 fixed  object-cover opacity-0"
      /> */}
      {/* <Image
        src={plant2}
        alt="plant"
        className="building z-[4] bottom-0 fixed  object-cover opacity-0"
      /> */}
      {/* <Image
        src={cloudleft}
        alt="cloud"
        className="cloudleft z-[4] bottom-0 fixed  object-cover opacity-0"
      /> */}
      {/* <Image
        src={cloudright}
        alt="cloud"
        className="cloudright z-[2] bottom-0 fixed  object-cover opacity-0"
      /> */}
      {/* <Image
        src={topcloud}
        alt="cloud"
        className="topcloud z-[4] bottom-0 fixed  object-cover opacity-0"
      /> */}
      {/* <Image
        src={bank}
        alt="bank"
        className="market z-[2] bottom-0 fixed  object-cover opacity-0"
      /> */}
      {/* <Image
        src={rocket}
        alt="rocket"
        className="market z-[4] bottom-0 fixed  object-cover opacity-0"
      /> */}

      {/* Rocks and road */}
      {/* <Image
        src={rocksRoad}
        alt="rocks"
        className="rocks fixed bottom-0 opacity-0 z-[7]"
      /> */}

      {/* Central office image */}
      {/* <Image
        src={central_office}
        className="max-w-[578px] fixed z-[9] top-[-50px] opacity-0 translate-x-[250px] central_office"
        alt="central office"
      /> */}

      {/* Overlay for the buildings and everything */}
      <div className="buildings-overlay fixed bg-[#000000A6] opacity-0 w-full h-full top-0 z-[11]"></div>
    </div>
  );
}
