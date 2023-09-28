import { LayoutGroup } from "framer-motion";

import TextNav from "../text/TextNav";

const NavigationMobile = ({ useState, navState, layoutId = "", top = 0 }) => {
  const clickHandler = (id, setFunc, state, item) => {
    setFunc(
      state.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return (
    <LayoutGroup id={layoutId}>
      <div
        className={`w-full [@media(hover)]:hidden h-[38px] whitespace-nowrap left-0 z-50 bg-white dark:bg-[#212122] fixed `}
        style={{
          top: top,
        }}
      >
        <div className={`overflow-y-hidden overflow-x-scroll hideScrollbarNav`}>
          <div className="flex pt-[8px] flex-row gap-[24px] max-w-[500px] mx-auto">
            {navState.map((item, key) => (
              <div
                key={key}
                // className={`${key == 0 ? "ml-auto" : null} ${
                //   key == navState.length - 1 ? "mr-auto" : null
                // }`}
                onClick={() => {
                  clickHandler(key, useState, navState, item);
                }}
              >
                <TextNav
                  text={item.name}
                  styled={`${key === 0 ? "ml-[12px]" : null} ${
                    key === navState.length - 1 ? "mr-[12px]" : null
                  } cursor-pointer select-none`}
                  active={navState[key].active ? true : false}
                />
              </div>
            ))}
            <div
              className={`h-[0.7px] bg-[#e7e7e7] dark:bg-[#282828] left-0 bottom-0 absolute w-full z-[-1]`}
            />
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
};

export default NavigationMobile;
