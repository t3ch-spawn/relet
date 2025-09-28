"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import RoadBuildings from "./Components/RoadBuildings";
import Hero from "./Components/Hero";
import Welcome from "./Components/Welcome";
import Kickstart from "./Components/Kickstart";
import MaskedCity from "./Components/MaskedCity";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <main className="stem w-full bg-black/70">
      <Hero />
      <RoadBuildings />
      <div className="whitespace white-1"></div>
      <div className="whitespace white-2"></div>
      <Welcome />
      <div className="whitespace white-3"></div>
      <Kickstart />
     
    </main>
  );
}
