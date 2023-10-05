const WriteIcon = ({ white }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <g
        fill="none"
        className={
          white
            ? "stroke-white"
            : "stroke-[#79a7d3] group-hover:stroke-[#397fbf] group-active:stroke-[#1a5c99] transition duration-[250ms]"
        }
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M5.325 43.5h8.485l31.113-31.113l-8.486-8.485L5.325 35.015V43.5Z" />
        <path strokeLinecap="round" d="m27.952 12.387l8.485 8.485" />
      </g>
    </svg>
  );
};

export default WriteIcon;
