"use client";

import React, { useRef } from "react";
import Image from "next/image";
import stars from "@/public/starsky.png";
import moon from "@/public/moon.png";
import moon_mob from "@/public/moon_mob.png";
import logo from "@/public/logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  useGSAP(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    let tl;

    tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".buildings-cont",
          toggleActions: "play none none reverse",
          start: "top 90%",
        },
      })
      .to(".welcome", {
        ease: "power1.inOut",
        opacity: 0,
      });
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      tl.to(".moon", { y: "-25%", ease: "power1.inOut", opacity: 1 }, "<");
    });

    mm.add("(max-width: 767px)", () => {
      tl.to(".moon", { y: "-190%", ease: "power1.inOut", opacity: 1 }, "<");
    });

    // Animation for text animations
    document.querySelectorAll(".text-anim").forEach((el) => {
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "animLine",
        autoSplit: true,
        onSplit: (self) => {
          return gsap
            .timeline({
              scrollTrigger: {
                trigger: el,
                start: "top 87%",
              },
            })
            .from(self.lines, {
              y: 80,
              stagger: 0.08,
              ease: "power2.inOut",
              duration: 0.7,
              onComplete: (e) => {
                const lineMasks = el.querySelectorAll(".animLine-mask");

                lineMasks.forEach((mask) => {
                  mask.classList.add("no-clip");
                });
              },
            });
        },
      });
    });

    document.querySelectorAll(".sub-heading").forEach((before) => {
      gsap.from(before, {
        "--before-width": "0%",
        delay: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: before,
          start: "top 87%",
        },
      });
    });
  }, []);

  return (
    <section className="w-full h-[100vh] hero relative overflow-hidden text-white flex justify-center items-center">
      {/* Background star */}
      <Image
        src={stars}
        alt="stars"
        className="fixed w-full h-full z-[2] object-cover"
      />
      <Image
        src={moon}
        alt="moon"
        className="fixed z-[3] object-cover max-[768px]:hidden object-right translate-y-[20%] moon"
      />

      {/* Moon only visible on mobile */}
      <Image
        src={moon_mob}
        className="max-w-[140px] fixed center-x center-y hidden max-[768px]:block z-[3] opacity-25  moon"
        alt="moon"
      />

      {/* Container for welcome and scroll to enter */}
      <div className="flex gap-[32px] max-[768px]:gap-[20px] relative z-[3] right-[100px] max-[768px]:right-0 welcome">
        <Image className="max-w-[78px]" src={logo} alt="logo" />

        {/* Container for text */}
        <div>
          <h1 className="text-[100px] max-[1024px]:text-[60px] leading-[100%] font-medium">
            Welcome
          </h1>
          <p className="text-[50px] max-[1024px]:text-[30px] leading-[100%]">
            Scroll to Enter
          </p>
        </div>
      </div>
    </section>
  );
}
