const TrashIcon = ({ onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="cursor-pointer min-w-[24px] min-h-[24px] group"
      onClick={onClick}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="stroke-[#79a7d3] group-hover:stroke-[#397fbf] group-active:stroke-[#1a5c99] transition duration-[250ms]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8h9m4 0h3m-9 8h9M4 16h3"
        />
        <circle cx="9" cy="16" r="2" />
        <circle cx="15" cy="8" r="2" />
      </g>
    </svg>
  );
};

export default TrashIcon;
