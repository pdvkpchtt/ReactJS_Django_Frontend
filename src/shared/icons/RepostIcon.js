import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RepostIcon = ({ onCLick = () => {} }) => {
  const isMobile = useMediaQuery({ query: "(pointer:coarse)" });

  const [activeState, setActiveState] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      className="cursor-pointer"
      onClick={() => {
        if (!activeState)
          toast(`Вы поделились записью`, {
            position: isMobile ? "top-center" : "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            // theme: "dark",
            progressStyle: { background: "#79a7d3" },
          });
        setActiveState(!activeState);
      }}
    >
      <path
        className={`${
          activeState
            ? "fill-[#79a7d3] hover:fill-[#397fbf] active:fill-[#1a5c99]"
            : "fill-[#8f8f8f]"
        } transition duration-[250ms]`}
        d="M5 4a2 2 0 0 0-2 2v6H0l4 4l4-4H5V6h7l2-2H5zm10 4h-3l4-4l4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"
      />
    </svg>
  );
};

export default RepostIcon;
