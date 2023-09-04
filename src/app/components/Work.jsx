"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRef } from "react";

export default function Work() {
  const animation = {
    initial: { y: "20%", opacity: 0 },
    enter: (i) => ({
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 2,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = 0;
  let currentXPercent = 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };
  return (
    <motion.section
      ref={ref}
      variants={animation}
      initial="initial"
      animate={"enter"}
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="lg:flex grid grid-cols-1 gap-4 h-screen lg:h-[85vh]"
    >
      <div ref={firstImage} className="relative lg:w-[66.66%]">
        <Image
          src="/work-1.png"
          alt="work"
          className="object-cover rounded-lg"
          fill={true}
        />
      </div>
      <div ref={secondImage} className="relative lg:w-[33.33%]">
        <Image
          src="/work-2.png"
          alt="work"
          className="object-cover rounded-lg"
          fill={true}
        />
      </div>
    </motion.section>
  );
}
