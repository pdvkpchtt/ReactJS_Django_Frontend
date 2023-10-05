import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LikeIcon = ({ onClick = () => {} }) => {
  const isMobile = useMediaQuery({ query: "(pointer:coarse)" });

  const [activeState, setActiveState] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      className="cursor-pointer"
      onClick={() => {
        if (!activeState)
          toast(`Вы оценили запись`, {
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
            ? "stroke-[#79a7d3] hover:stroke-[#397fbf] active:stroke-[#1a5c99] fill-[#79a7d3] hover:fill-[#397fbf] active:fill-[#1a5c99]"
            : "stroke-[#8f8f8f] fill-transparent"
        } transition duration-[250ms]`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"
      />
    </svg>
  );
};

export default LikeIcon;
