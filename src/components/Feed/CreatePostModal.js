"use client";

import TextareaAutosize from "react-textarea-autosize";
import { useState, useRef, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useMediaQuery } from "react-responsive";

import Modal from "../../shared/ui/Modal";
import PostDropDown from "../../shared/ui/PostDropDown";
import MobileModal from "../../shared/ui/MobileModal";

import CrossIcon from "../../shared/icons/CrossIcon";
import TextMain from "../../shared/text/TextMain";

const CreatePostModal = ({
  open = false,
  setClose = () => {},
  headerMax = 120,
  textMax = 500,
}) => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const isMobile = useMediaQuery({ query: "(pointer:coarse)" });

  const [dropDownState, setDropDownState] = useState({ name: "Лента" });
  const [headState, setHeadState] = useState("");
  const [textState, setTextState] = useState("");

  const [loaderState, setLoaderState] = useState(false);
  const [slideToTopState, setSlideToTop] = useState(false);

  const categories = [
    { name: "Лента" },
    { name: "Новости" },
    { name: "Валюта" },
  ];

  useEffect(() => {
    if (isMobile) {
      if (open) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "unset";
    }
  }, [open, isMobile]);

  return (
    <>
      <Modal isOpen={open} slideToTop={slideToTopState}>
        {/* header */}
        <div className="flex flex-row justify-between">
          <PostDropDown
            choise={dropDownState}
            items={categories}
            handleSetChoise={(val) => setDropDownState(val)}
          />
          <CrossIcon onClick={() => setClose(false)} />
        </div>
        {/* header */}

        {/* body */}
        <div className="flex flex-col my-[12px] gap-[12px] overflow-y-auto">
          <TextareaAutosize
            className="outline-none min-h-[25px] resize-none bg-transparent placeholder:text-[#BFBFBF] text-[20px] font-medium text-[#2c2c2c] dark:text-white leading-[22px] tracking-[-0.025em]"
            placeholder="Заголовок"
            value={headState}
            onChange={(e) => setHeadState(e.target.value)}
            maxLength={headerMax}
          />
          <div
            className="h-[283px] cursor-text w-full"
            onClick={() => inputRef.current.focus()}
          >
            <TextareaAutosize
              ref={inputRef}
              className="outline-none w-full resize-none bg-transparent placeholder:text-[#BFBFBF] text-[16px] font-normal text-[#2c2c2c] dark:text-white leading-[19px] tracking-[-0.015em]"
              placeholder="Текст"
              value={textState}
              onChange={(e) => setTextState(e.target.value)}
              maxLength={textMax}
            />
          </div>
        </div>
        {/* body */}

        {/* bottom */}
        <div className="flex flex-row h-fit justify-end items-center w-full">
          <div
            className={`${
              textState.length === 0 || headState.length === 0
                ? "bg-[#141414] cursor-not-allowed"
                : " hover:bg-[#397fbf] active:bg-[#1a5c99] bg-[#79a7d3] cursor-pointer"
            } rounded-full px-[12px] text-[#fff] select-none py-[3px] text-medium transition duration-[250ms] flex justify-center items-center`}
            onClick={
              textState.length > 0 && headState.length > 0
                ? () => {
                    setSlideToTop(true);
                    setLoaderState(true);
                    setHeadState("");
                    setTextState("");
                    setDropDownState({ name: "Лента" });
                    setLoaderState(false);
                    setClose();
                    setSlideToTop(false);
                  }
                : () => {}
            }
          >
            {loaderState ? (
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
            ) : (
              "Опубликовать"
            )}
          </div>
        </div>
        {/* bottom */}
      </Modal>

      <MobileModal isOpen={open} slideToLeft>
        {/* header */}
        <div className="[@media(pointer:coarse)]:fixed z-20 [@media(pointer:coarse)]:top-0 [@media(pointer:coarse)]:w-full [@media(pointer:coarse)]:left-0 [@media(pointer:coarse)]:rounded-t-[0px] border-b-[0.7px] border-b-[#E7E7E7] dark:border-b-[#2f2f2f] bg-white dark:bg-[#212122] rounded-t-[20px] p-[12px]">
          <div className="items-center w-full flex flex-row justify-between [@media(pointer:coarse)]:max-w-[476px] [@media(pointer:coarse)]:mx-auto">
            <div
              onClick={() => {
                setClose();
              }}
            >
              <TextMain
                text="Отмена"
                styles={"text-[14px] tracking-[-0.013125em] leading-[17px]"}
              />
            </div>

            <div
              className={`${
                textState.length === 0 || headState.length === 0
                  ? "bg-[#141414] cursor-not-allowed"
                  : " hover:bg-[#397fbf] active:bg-[#1a5c99] bg-[#79a7d3] cursor-pointer"
              } rounded-full px-[12px] select-none text-[#fff] py-[3px] text-medium transition duration-[250ms] flex justify-center items-center`}
              onClick={
                textState.length > 0 && headState.length > 0
                  ? async () => {
                      setSlideToTop(true);
                      setLoaderState(true);
                      setHeadState("");
                      setTextState("");
                      setDropDownState({ name: "Лента" });
                      setLoaderState(false);
                      setClose();

                      setSlideToTop(false);
                    }
                  : () => {}
              }
            >
              Опубликовать
            </div>
          </div>
        </div>
        {/* header */}

        {/* body */}
        <div className="flex px-[12px] h-[calc(100vh-132px)] mt-[58px] flex-col gap-[12px] overflow-y-auto">
          <PostDropDown
            choise={dropDownState}
            items={categories}
            handleSetChoise={(val) => setDropDownState(val)}
          />

          <div className="w-full">
            <TextareaAutosize
              className="outline-none w-full bg-transparent min-h-[25px] resize-none placeholder:text-[#BFBFBF] text-[20px] font-medium text-[#2c2c2c] dark:text-white leading-[22px] tracking-[-0.025em]"
              placeholder="Заголовок"
              value={headState}
              onChange={(e) => setHeadState(e.target.value)}
              maxLength={headerMax}
            />
          </div>
          <div
            className="h-full cursor-text w-full"
            onClick={() => inputRef2.current.focus()}
          >
            <TextareaAutosize
              ref={inputRef2}
              className="outline-none w-full bg-transparent resize-none placeholder:text-[#BFBFBF] text-[16px] font-normal text-[#2c2c2c] dark:text-white leading-[19px] tracking-[-0.015em]"
              placeholder="Текст"
              value={textState}
              onChange={(e) => setTextState(e.target.value)}
              maxLength={textMax}
            />
          </div>
        </div>
        {/* body */}
      </MobileModal>
    </>
  );
};

export default CreatePostModal;
