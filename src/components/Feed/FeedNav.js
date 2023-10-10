import { useState } from "react";

import CreatePostModal from "./CreatePostModal";
import Card from "../../shared/ui/Card";
import { ButtonGhost } from "../../shared/ui/Button";

import WriteIcon from "../../shared/icons/WriteIcon";

const FeedNav = ({ navState, setNavState }) => {
  const [createPost, setCreatePost] = useState(false);

  const clickHandler = (id, setFunc, state) => {
    setFunc(
      state.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return (
    <>
      <div className="[@media(pointer:coarse)]:hidden fixed ml-[716px] w-[260px]">
        <Card styles="h-fit flex flex-col gap-[12px]">
          {navState.map((item, key) => (
            <div
              key={key}
              className={` ${
                item.active
                  ? "bg-[#79a7d3] text-[#fff] hover:bg-[#397fbf] active:bg-[#1a5c99]"
                  : "text-[#2c2c2c] dark:text-[#8f8f8f]"
              } text-[15px] px-[6px] py-[3px] rounded-[8px] cursor-pointer select-none leading-[20px] tracking-[-0.0140625em] transition duration-[250ms] font-medium`}
              onClick={() => clickHandler(key, setNavState, navState)}
            >
              {item.name}
            </div>
          ))}
        </Card>

        <div className="w-full mt-[24px] rounded-full py-[6px] px-[12px] bg-white dark:bg-[#212122] transition duration-[250ms]">
          <ButtonGhost text="Создать пост" onClick={() => setCreatePost(true)}>
            <WriteIcon />
          </ButtonGhost>
        </div>
      </div>

      <div
        onClick={() => setCreatePost(true)}
        className="fixed [@media(hover)]:hidden p-[15px] rounded-full right-[20px] bottom-[83px] bg-[#79a7d3] hover:bg-[#397fbf] active:bg-[#1a5c99] transition duration-[250ms]"
      >
        <WriteIcon white />
      </div>

      <CreatePostModal open={createPost} setClose={setCreatePost} />
    </>
  );
};

export default FeedNav;
