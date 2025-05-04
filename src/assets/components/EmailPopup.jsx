import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailPopup = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const email = "hello@augustas.co";

  const handleClick = () => {
    setTooltipVisible(true);
    setIsCopied(false); // Reset copied state on click
    clearTimeout(timeoutId); // Clear any existing timeout
    const id = setTimeout(() => setTooltipVisible(false), 2000);
    setTimeoutId(id);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Prevent hiding if re-entering
    setTooltipVisible(true);
    setIsCopied(false); // Reset copied state on hover
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setTooltipVisible(false);
      setIsCopied(false); // Reset copied state after delay
    }, 1000);
    setTimeoutId(id);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    clearTimeout(timeoutId); // Clear any existing timeout
    const id = setTimeout(() => {
      setTooltipVisible(false);
      setIsCopied(false); // Reset after 2 seconds
    }, 1000);
    setTimeoutId(id);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out"
        onClick={handleClick}
      >
        <img src="images/svgs/Email.svg" alt="icon" />
      </div>
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 !mb-2 !px-3 !py-1 border border-[var(--gray3)] flex text-nowrap bg-[var(--gray4)] text-white text-sm rounded-[10px] alt circle-none"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span
              className="cursor-pointer text-white/80 hover:text-white transition-colors duration-200"
              onClick={handleCopy}
            >
              {isCopied ? "Copied!" : email}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailPopup;