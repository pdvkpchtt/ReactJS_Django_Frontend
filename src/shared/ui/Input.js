import { useRef } from "react";
import CircularProggressBar from "../../shared/ui/CircularProggressBar";

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
}) => {
  return (
    <div className="flex flex-col min-w-[20px] w-full">
      <div className="flex flex-row justify-between">
        {label && (
          <TextSecondary
            text={label}
            styles="font-medium ml-[4px] select-none text-[14px] leading-[16.8px] tracking-[-0.013em] mb-[6px]"
          />
        )}

        {maxLength ? (
          <div className="w-[16px] h-[16px] mr-[4px]">
            <CircularProggressBar
              progress={value.length}
              maxWal={maxLength}
              trackColor={
                value.length === 0
                  ? "stroke-[#f6f6f8] dark:stroke-[#2c2c2c]"
                  : "stroke-[#79a7d35b] dark:stroke-[#79a7d35b]"
              }
              indicatorColor={
                value.length === 0 ? "stroke-[#f6f6f8]" : "stroke-[#79a7d3]"
              }
              trackWidth={2.67}
              indicatorWidth={2.67}
              size={18}
            />
          </div>
        ) : null}
      </div>

      <input
        name={name}
        placeholder={placeholder || ""}
        value={value ? value : ""}
        className="px-[12px] bg-[#f6f6f8] placeholder:select-none dark:bg-[#2c2c2c] text-[#2c2c2c] dark:text-white dark:placeholder:text-[#8f8f8f] text-[14px] pb-[12px] pt-[11px] transition duration-[250ms] hover:inner-border-[1px] hover:inner-border-[#5875e8] outline-none placeholder:font-normal placeholder:text-[#bfbfbf] leading-[18px] tracking-[-0.015em] placeholder:leading-[18px] placeholder:tracking-[-0.015em]"
        style={{
          borderRadius: rounded,
        }}
        onChange={onChange ? (e) => onChange(e.target.value) : null}
        type={type}
        maxLength={maxLength}
      />
    </div>
  );
};

export const SearchInput = ({
  placeholder = "",
  value,
  onChange = () => {},
}) => {
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
        onChange={(e) => onChange(e.target.value)}
        className="placeholder:font-normal w-full text-[#2c2c2c] dark:placeholder:text-[#8f8f8f] dark:text-white bg-transparent pt-[11px] pb-[11px] outline-none placeholder:text-[#bfbfbf] leading-[16.8px] tracking-[-0.013em] placeholder:leading-[16.8px] placeholder:tracking-[-0.013em]"
      />
    </div>
  );
};
