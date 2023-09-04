"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import Work from "./components/Work";
import InfiniteText from "./components/InfiniteText";
import About from "./components/About";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <Hero />
      <Work />
      <InfiniteText />
      <About />
      <Image
        src="/scroll-down.svg"
        alt="Scroll Down Icon"
        className="mx-auto py-8"
        width={200}
        height={200}
      />
    </main>
  );
}
