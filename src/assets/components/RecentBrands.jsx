import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RecentBrands = () => {
  const textRef = useRef(null);
  const logosRef = useRef(null);

  const isTextInView = useInView(textRef, { once: true, margin: "0px 0px -50px 0px" });
  const isLogosInView = useInView(logosRef, { once: true, margin: "0px 0px -50px 0px" });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0, 0.1, 1],
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0, 0.1, 1],
        delay: 0.1 + index * 0.08,
      },
    }),
  };

  return (
    <div className="w-[1000px] relative h-fit !mr-8 !ml-8 max-[1064px]:w-full flex flex-col items-center justify-center gap-4">
      <motion.p
        ref={textRef}
        className="sf text-[var(--gray2)] text-base"
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
      >
        Recent brands we worked with
      </motion.p>
      <div
        ref={logosRef}
        className="flex flex-row gap-8 w-fit relative items-center h-[40px]"
      >
        <div className="h-[50px] w-[100px] bg-gradient-to-l from-black/0 to-black absolute left-[-30px] z-10" />
        <div className="h-[50px] w-[100px] bg-gradient-to-r from-black/0 to-black absolute right-[-30px] z-10" />

        <motion.img
          src="images/logos/Plazma.svg"
          alt="logo"
          variants={logoVariants}
          initial="hidden"
          animate={isLogosInView ? "visible" : "hidden"}
          custom={0}
          className="relative z-0 h-full w-auto"
        />
        <motion.img
          src="images/logos/Frostchanger.svg"
          alt="logo"
          variants={logoVariants}
          initial="hidden"
          animate={isLogosInView ? "visible" : "hidden"}
          custom={1}
          className="relative z-0 h-full w-auto"
        />
        <motion.img
          src="images/logos/Sprout.svg"
          alt="logo"
          variants={logoVariants}
          initial="hidden"
          animate={isLogosInView ? "visible" : "hidden"}
          custom={2}
          className="relative z-0 h-full w-auto"
        />
        <motion.img
          src="images/logos/Copywiz.svg"
          alt="logo"
          variants={logoVariants}
          initial="hidden"
          animate={isLogosInView ? "visible" : "hidden"}
          custom={3}
          className="relative z-0 h-full w-auto"
        />
      </div>
    </div>
  );
};

export default RecentBrands;