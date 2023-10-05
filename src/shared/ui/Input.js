import TextSecondary from "../text/TextSecondary";

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
