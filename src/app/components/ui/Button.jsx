"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Button = ({ children, primary }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 1,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.button
        variants={primary && animation}
        initial="initial"
        animate={inView ? "enter" : ""}
        className={` font-semibold rounded-full transition-colors ${
          primary
            ? "bg-greeno px-8 py-3 lg:px-10 lg:py-4  hover:bg-greeno/80 text-base lg:text-lg "
            : "text-greeno bg-black px-6 py-2 hover:bg-black/80 text-base"
        }`}
      >
        {children}
      </motion.button>
    </div>
  );
};

export default Button;
