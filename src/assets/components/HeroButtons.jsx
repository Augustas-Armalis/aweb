import { motion } from 'framer-motion';
import ButterflyBtn from '../buttons/ButterflyBtn.jsx';
import MainBtn from '../buttons/MainBtn.jsx';

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0, 0.1, 1],
      delay: 0.2 + (index * 0.17),
    },
  }),
};

const HeroButtons = () => {

  return (

    <div className="flex gap-2">
      <motion.div
        custom={0}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <ButterflyBtn title="Let's talk" href="#"/>
      </motion.div>
      <motion.div
        custom={1}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <MainBtn title="Pricing" href="#"/>
      </motion.div>
    </div>

  );

};

export default HeroButtons;