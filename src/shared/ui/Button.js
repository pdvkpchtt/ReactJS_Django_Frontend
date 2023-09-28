import { useState } from "react";
import { Oval } from "react-loader-spinner";

const Button = ({
  text = "empty",
  styles = "",
  loader = false,
  onClick = () => {},
}) => {
  const [loaderState, setLoaderState] = useState(false);

  const clickHandler = () => {
    onClick();

    if (loader) setLoaderState(true);
  };

  return (
    <button
      className={`${styles} font-medium outline-none [@media(pointer:coarse)]:rounded-[20px] rounded-[16px] h-[43px] leading-[20px] text-[16px] tracking-[-0.015em] text-center select-none text-white items-center flex justify-center cursor-pointer transition duration-[250ms] bg-[#79a7d3] hover:bg-[#397fbf] active:bg-[#1a5c99]`}
      onClick={() => clickHandler()}
    >
      {!loaderState ? (
        <>{text}</>
      ) : (
        <Oval
          height={19}
          width={19}
          color="rgba(255, 255, 255, 1)"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="rgba(255, 255, 255, 0.3)"
          strokeWidth={6}
          strokeWidthSecondary={6}
        />
      )}
    </button>
  );
};

export default Button;

export const ButtonGhost = ({
  children,
  styles = "",
  type,
  text = "empty",
  small = false,
  onClick = () => console.log("empty"),
}) => {
  const clickHandler = () => {
    onClick();
  };

  return (
    <button
      type={type ? type : null}
      className={`${styles} group text-center h-[28px] w-fit whitespace-nowrap items-center flex-row gap-[8px] flex 
      ${
        small
          ? "font-medium text-[14px] leading-[16px] tracking-[-0.015em]"
          : "font-medium leading-[20px] text-[16px] tracking-[-0.015em]"
      } 
      text-[#79a7d3] cursor-pointer select-none transition duration-[250ms] hover:text-[#397fbf] active:text-[#1a5c99]`}
      onClick={() => clickHandler()}
    >
      <>{children}</>
      <>{text}</>
    </button>
  );
};
