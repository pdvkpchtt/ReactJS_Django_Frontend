import { motion, AnimatePresence } from "framer-motion";

const MobileModal = ({
  isOpen = false,
  handleClose = () => {},
  children,
  slideToLeft = false,
  translate = "translate(-50%, 0%)",
}) => {
  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const containerVariant = slideToLeft
    ? {
        initial: { left: "100%", transition: { type: "spring" } },
        isOpen: { left: "50%" },
        exit: { left: "100%" },
      }
    : {
        initial: { top: "100%", transition: { type: "spring" } },
        isOpen: { top: "0" },
        exit: { top: "100%" },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed [@media(hover)]:hidden top-0 left-0 w-full h-full bg-[#000] bg-opacity-[20%] z-50"
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <motion.div
            className="w-full h-full fixed dark:bg-black bg-white bottom-0 left-[50%]"
            variants={containerVariant}
            style={{ transform: translate }}
          >
            <div className="max-w-[500px] mx-auto w-full h-full">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileModal;
