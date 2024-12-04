import { useState } from "react";

import CreatePostModal from "./CreatePostModal";
import Card from "../../shared/ui/Card";
import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";
import { ButtonGhost } from "../../shared/ui/Button";

import WriteIcon from "../../shared/icons/WriteIcon";

const FeedNav = () => {
  const [createPost, setCreatePost] = useState(false);

  return (
    <>
      <div className="[@media(pointer:coarse)]:hidden fixed ml-[716px] w-[260px]">
        <Card styles="h-fit flex flex-col gap-[6px] text-center">
          <TextMain
            text="Здесь могла быть ваша реклама :)"
            styles="font-medium leading-[14px]"
          />
          <TextSecondary
            text="По вопросам рекламы: students@gmail.com"
            styles="text-[12px] font-medium leading-[12px]"
          />
        </Card>

        <div className="w-full mt-[16px] rounded-full py-[6px] px-[12px] bg-white dark:bg-[#212122] transition duration-[250ms]">
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
