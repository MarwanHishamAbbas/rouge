import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function MaskText({ phrases, className }) {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={`overflow-hidden ${className} `}>
            <motion.h1
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.h1>
          </div>
        );
      })}
    </div>
  );
}
