"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import RoadBuildings from "./Components/RoadBuildings";
import Hero from "./Components/Hero";
import Welcome from "./Components/Welcome";
import Kickstart from "./Components/Kickstart";
import MaskedCity from "./Components/MaskedCity";
import Tokenized from "./Components/Tokenized";
import Roadmap from "./Components/Roadmap";
import Partners from "./Components/Partners";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <main className="stem w-full text-white bg-black/70 ">
      <Hero />
      <RoadBuildings />
      <div className="whitespace white-1"></div>
      <div className="whitespace white-2"></div>
      <Welcome />
      <div className="whitespace white-3"></div>
      {/* <Kickstart /> */}
      {/* <div className="whitespace white-4"></div> */}
      <Tokenized />
      <div className="whitespace white-5"></div>
      <Roadmap />
      <div className="whitespace white-6"></div>
      <Partners />
    </main>
  );
}
