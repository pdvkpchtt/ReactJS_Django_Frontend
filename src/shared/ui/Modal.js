import { motion, AnimatePresence } from "framer-motion";

const Modal = ({
  isOpen = false,
  handleClose = () => {},
  children,
  translate = "translate(-50%, 0%)",
  slideToTop = false,
  fadeAnim = false,
}) => {
  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const containerVariant = {
    initial: fadeAnim
      ? { scale: 0.7, translateX: "-50%", top: "78px" }
      : { top: "100%", transition: { type: "spring" } },
    isOpen: fadeAnim
      ? {
          scale: 1,
          translateX: "-50%",
          top: "78px",
        }
      : { top: "78px" },
    exit: fadeAnim
      ? { scale: 0.7, translateX: "-50%", top: "78px" }
      : { top: slideToTop ? "-100%" : "100%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed [@media(pointer:coarse)]:hidden top-0 left-0 w-full h-full bg-[#000000] bg-opacity-[20%] z-[60]"
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={modalVariant}
          >
            <motion.div
              className="w-[630px] h-fit fixed dark:bg-black bg-white bottom-0 left-[50%] p-[12px] rounded-[20px]"
              variants={containerVariant}
              style={{ transform: translate }}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
