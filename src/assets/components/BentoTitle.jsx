import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const titleLetterVariants = {
  hidden: { opacity: 0, y: '40%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0, 0.1, 1.05],
    },
  },
};

const titleLineVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const BentoTitle = () => {
  const title = 'Why Businesses Choose AWeb?';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  const splitLineIntoWords = (line) => {
    const words = line.split(' ');
    console.log('Words:', words);
    return words.map((word, wordIndex) => (
      <span key={`word-${wordIndex}`} className="inline-block">
        {word.split('').map((char, charIndex) => {
          const isTargetA = wordIndex === words.length - 1 && charIndex === 0 && char === 'A';
          if (isTargetA) {
            console.log('Detected "A" in last word at wordIndex:', wordIndex, 'charIndex:', charIndex);
          }
          return (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              variants={titleLetterVariants}
              style={{
                display: 'inline-block',
                whiteSpace: 'pre',
                marginRight: isTargetA ? '-3px' : undefined,
              }}
              className={isTargetA ? 'tighten-a' : ''}
            >
              {char}
            </motion.span>
          );
        })}
        {wordIndex < words.length - 1 && (
          <span style={{ display: 'inline-block', whiteSpace: 'pre' }}> </span>
        )}
      </span>
    ));
  };

  return (
    <motion.div
      ref={ref}
      variants={titleLineVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="smif text-[36px] block overflow-hidden"
      style={{ position: 'relative' }}
    >
      {splitLineIntoWords(title)}
    </motion.div>
  );
};

export default BentoTitle;