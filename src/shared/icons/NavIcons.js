import { useLocation } from "react-router-dom";

export const ComputerIcon = () => {
  const { pathname } = useLocation();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      className="cursor-pointer group"
    >
      <path
        className={`${
          pathname === "/feed"
            ? "fill-[#79a7d3] group-hover:fill-[#397fbf] group-active:fill-[#1a5c99]"
            : "fill-[#bfbfbf] group-hover:fill-[#a7a7a7] group-active:fill-[#929292] dark:fill-[#8f8f8f] group-hover:dark:fill-[#747474] group-active:dark:fill-[#555555]"
        } transition duration-[250ms]`}
        d="M2 21q-.425 0-.713-.288T1 20q0-.425.288-.713T2 19h20q.425 0 .713.288T23 20q0 .425-.288.713T22 21H2Zm2-3q-.825 0-1.413-.588T2 16V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.588 1.413T20 18H4Zm0-2h16V5H4v11Zm0 0V5v11Z"
      />
    </svg>
  );
};

export const ProfileIcon = () => {
  const { pathname } = useLocation();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      className="cursor-pointer group"
    >
      <g
        fill="none"
        className={`${
          pathname === "/profile"
            ? "stroke-[#79a7d3] group-hover:stroke-[#397fbf] group-active:stroke-[#1a5c99]"
            : "stroke-[#bfbfbf] group-hover:stroke-[#a7a7a7] group-active:stroke-[#929292] dark:stroke-[#8f8f8f] group-hover:dark:stroke-[#747474] group-active:dark:stroke-[#555555]"
        } transition duration-[250ms]`}
        strokeWidth="2"
      >
        <path
          strokeLinejoin="round"
          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
        />
        <circle cx="12" cy="7" r="3" />
      </g>
    </svg>
  );
};

export const SearchIcon = () => {
  const { pathname } = useLocation();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      className="cursor-pointer group"
    >
      <path
        className={`${
          pathname === "/users"
            ? "fill-[#79a7d3] group-hover:fill-[#397fbf] group-active:fill-[#1a5c99]"
            : "fill-[#bfbfbf] group-hover:fill-[#a7a7a7] group-active:fill-[#929292] dark:fill-[#8f8f8f] group-hover:dark:fill-[#747474] group-active:dark:fill-[#555555]"
        } transition duration-[250ms]`}
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
      />
    </svg>
  );
};
