import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0, 0.1, 1.05],
    },
  },
};

const doorVariants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 3.6,
      ease: [0.25, 0, 0.1, 1.05],
    },
  },
};

const Hero = () => {
  return (
    <div className="absolute right-[-600px] top-[188px] w-fit">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
        style={{ overflow: 'hidden' }}
      >
        <motion.div
          variants={doorVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="images/svgs/HugeLogo.svg"
            alt="Huge logo"
            className="h-[300px] w-auto opacity-80"
            style={{
              display: 'block',
              position: 'relative',
              left: 0,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;