"use client";

import { LayoutGroup } from "framer-motion";

import TextNav from "../text/TextNav";

const NavigationPc = ({ useState, navState, layoutId = "", style = "" }) => {
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
        className={`${style} [@media(pointer:coarse)]:hidden hideScrollbarNav flex w-full flex-row gap-[24px] overflow-y-hidden whitespace-nowrap`}
      >
        {navState.map((item, key) => (
          <div
            key={key}
            className="[@media(pointer:coarse)]:ml-auto"
            onClick={() => {
              clickHandler(key, useState, navState, item);
            }}
          >
            <TextNav
              text={item.name}
              styled="[@media(pointer:coarse)]:ml-[16px] cursor-pointer select-none"
              active={navState[key].active ? true : false}
            />
          </div>
        ))}
      </div>
    </LayoutGroup>
  );
};

export default NavigationPc;
