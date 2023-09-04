"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

export default function InfiniteText() {
  const firstText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-100%",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.2 * direction;
  };
  return (
    <section className="text-3xl lg:text-6xl font-semibold  overflow-hidden whitespace-nowrap">
      <div ref={firstText} className="flex items-center flex-nowrap gap-5 ">
        <p>Branded eCommerce</p>
        <Image src="/sun.svg" width={250} height={250} alt="Vector" />
        <p>Brand Identity</p>
        <Image src="/sun.svg" width={250} height={250} alt="Vector" />
        <p>Key Visual</p>
        <Image src="/sun.svg" width={250} height={250} alt="Vector" />
        <p>Digital Experience</p>
        <Image src="/sun.svg" width={250} height={250} alt="Vector" />
        <p>Branded eCommerce</p>
        <Image src="/sun.svg" width={250} height={250} alt="Vector" />
        <p>Brand Identity</p>
        <Image src="/sun.svg" width={250} height={250} alt="Vector" />
        <p>Key Visual</p>
        <Image src="/sun.svg" width={250} height={250} alt="Vector" />
        <p>Digital Experience</p>
      </div>
    </section>
  );
}
