import { useState } from "react";

import Card from "../../shared/ui/Card";
import EmptyAvatar from "../../shared/ui/EmptyAvatar";
import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";
import BottomModal from "../../shared/ui/BottomModal";

import LikeIcon from "../../shared/icons/LikeIcon";
import RepostIcon from "../../shared/icons/RepostIcon";
import TrashIcon from "../../shared/icons/TrashIcon";

const Post = ({ item }) => {
  const [bottomModal, setBottomModal] = useState(false);

  return (
    <>
      <Card styles="flex flex-row gap-[8px] [@media(hover)]:w-[700px]">
        <EmptyAvatar little />

        {/* name date avatar */}
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[8px]">
            <TextMain
              text={item.name}
              styles="truncate leading-[14px] font-medium"
            />
            <TextSecondary
              text={item.createdAt}
              styles="truncate leading-[13px] select-none text-[13px] font-medium"
            />
          </div>
          {/* name date avatar */}

          {/* body */}
          <TextMain
            text={item.title}
            styles="text-[20px] font-medium leading-[20px] tracking-[-0.025em] [@media(pointer:coarse)]:text-[18px] [@media(pointer:coarse)]:leading-[18px] [@media(pointer:coarse)]:tracking-[-0.014625em]"
          />

          <TextMain
            text={
              item.text.length <= 200
                ? item.text
                : item.text.slice(0, 199) + "..."
            }
            styles="font-normal text-[16px] leading-[16px] tracking-[-0.015em] [@media(pointer:coarse)]:text-[15px] [@media(pointer:coarse)]:leading-[15px] [@media(pointer:coarse)]:tracking-[-0.0121875em]"
          />
          {/* body */}

          {/* reactions */}
          <div className="flex flex-row items-center">
            <LikeIcon />
            <TextMain
              text={item.likes}
              styles="text-[14px] select-none leading-[20px] ml-[4px] mr-[16px] font-medium"
            />

            <RepostIcon />
          </div>
          {/* reactions */}
        </div>

        <TrashIcon onClick={() => setBottomModal(true)} />
      </Card>

      {/* delete modal */}
      <BottomModal
        isOpen={bottomModal}
        handleClose={() => setBottomModal(false)}
      >
        <div className="h-full w-full px-[12px] pt-[12px] pb-[24px]">
          <div
            className="bg-[#74899B] bg-opacity-[8%] rounded-[8px] hover:bg-[#647f98] active:bg-[#3e5061] active:bg-opacity-[15%] hover:bg-opacity-[15%] cursor-pointer transition duration-[250ms] p-[16px]"
            // onClick={() => deleteHanler()}
          >
            <TextMain
              text="Удалить пост"
              styles="font-medium select-none text-[16px] leading-[20px] tracking-[-0.015em]"
            />
          </div>
        </div>
      </BottomModal>
      {/* delete modal */}
    </>
  );
};

export default Post;
