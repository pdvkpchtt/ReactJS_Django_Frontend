import EmptyAvatar from "../../shared/ui/EmptyAvatar";
import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";

import CrossIcon from "../../shared/icons/CrossIcon";
import LikeIcon from "../../shared/icons/LikeIcon";
import RepostIcon from "../../shared/icons/RepostIcon";

const MobilePost = ({ item, setClose }) => {
  return (
    <div className="flex flex-row gap-[8px]">
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

      <div>
        <CrossIcon onClick={setClose} />
      </div>
    </div>
  );
};

export default MobilePost;
