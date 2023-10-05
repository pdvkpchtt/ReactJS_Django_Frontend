import { useRef } from "react";

import TextSecondary from "../text/TextSecondary";

import SearchInputIcon from "../icons/SearchInputIcon";

export const Input = ({
  label = "",
  placeholder = "",
  value,
  rounded = 8,
  maxLength,
  onChange,
  type = "text",
  name = "",
  defaultValue,
}) => {
  return (
    <div className="flex flex-col min-w-[20px] w-full">
      {label && (
        <TextSecondary
          text={label}
          styles="font-medium text-[14px] leading-[16.8px] tracking-[-0.013em] mb-[6px]"
        />
      )}

      <input
        name={name}
        placeholder={placeholder || ""}
        value={value ? value : null}
        autoComplete
        className="px-[12px] bg-[#f6f6f8] dark:bg-[#2c2c2c] text-[#2c2c2c] dark:text-white dark:placeholder:text-[#8f8f8f] text-[14px] pb-[12px] pt-[11px] transition duration-[250ms] hover:inner-border-[1px] hover:inner-border-[#5875e8] outline-none placeholder:font-normal placeholder:text-[#bfbfbf] leading-[18px] tracking-[-0.015em] placeholder:leading-[18px] placeholder:tracking-[-0.015em]"
        style={{
          borderRadius: rounded,
        }}
        onChange={onChange ? (e) => onChange(e.target.value) : null}
        type={type}
        maxLength={maxLength}
        defaultValue={defaultValue ? defaultValue : null}
      />
    </div>
  );
};

export const SearchInput = ({ placeholder = "", value, onChange }) => {
  const ref = useRef(null); // чтобы при нажатии на весь иблок инпута происходила фокусировка

  return (
    <div
      className="[@media(pointer:coarse)]:rounded-[20px] bg-[#f6f6f8] dark:bg-[#2c2c2c] dark:placeholder:text-[#8f8f8f] dark:text-white px-[12px] rounded-[8px] w-full cursor-text flex items-center flex-row gap-[8px] transition duration-[250ms] hover:inner-border-[1px] hover:inner-border-[#5875e8]"
      onClick={() => ref.current.focus()}
    >
      <div className="[@media(pointer:coarse)]:hidden">
        <SearchInputIcon />
      </div>

      <input
        ref={ref}
        placeholder={placeholder || ""}
        value={value}
        className="placeholder:font-normal w-full text-[#2c2c2c] dark:placeholder:text-[#8f8f8f] dark:text-white bg-transparent pt-[11px] pb-[11px] outline-none placeholder:text-[#bfbfbf] leading-[16.8px] tracking-[-0.013em] placeholder:leading-[16.8px] placeholder:tracking-[-0.013em]"
      />
    </div>
  );
};
