import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import EmptyAvatar from "../../shared/ui/EmptyAvatar";
import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";
import BottomModal from "../../shared/ui/BottomModal";
import FullPostModal from "./FullPostModal";
import Card from "../../shared/ui/Card";

import LikeIcon from "../../shared/icons/LikeIcon";
import RepostIcon from "../../shared/icons/RepostIcon";
import TrashIcon from "../../shared/icons/TrashIcon";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
require("dayjs/locale/ru");
dayjs.locale("ru");
var updateLocale = require("dayjs/plugin/updateLocale");
dayjs.extend(updateLocale);

const Post = ({ item, setSelectedId = () => {}, selectedId }) => {
  const isMobile = useMediaQuery({ query: "(pointer:coarse)" });

  const [bottomModal, setBottomModal] = useState(false);

  return (
    <>
      <LayoutGroup id={selectedId}>
        <motion.div
          layoutId={item.id}
          className={`${selectedId === item.id && "hidden z-40"}`}
        >
          <Card styles=" flex flex-row gap-[8px] [@media(hover)]:w-[700px]">
            <EmptyAvatar little />

            {/* name date avatar */}
            <div className="flex flex-col gap-[12px] w-full">
              <div className="flex flex-col gap-[8px]">
                <TextMain
                  text={item.name}
                  styles="truncate leading-[14px] font-medium"
                />
                <TextSecondary
                  text={dayjs().to(item.createdAt)}
                  styles="truncate leading-[13px] select-none text-[13px] font-medium"
                />
              </div>
              {/* name date avatar */}

              {/* body */}
              <div
                className="flex flex-col gap-[12px] cursor-pointer w-full"
                onClick={() => (!isMobile ? setSelectedId(item.id) : {})}
              >
                <TextMain
                  text={item.title}
                  styles="text-[20px] font-medium leading-[20px] tracking-[-0.025em] [@media(pointer:coarse)]:text-[18px] [@media(pointer:coarse)]:leading-[18px] [@media(pointer:coarse)]:tracking-[-0.014625em]"
                />

                <TextMain
                  text={
                    !isMobile
                      ? item.text.length <= 80
                        ? item.text
                        : item.text.slice(0, 79) + "..."
                      : item.text
                  }
                  styles="font-normal text-[16px] leading-[16px] tracking-[-0.015em] [@media(pointer:coarse)]:text-[15px] [@media(pointer:coarse)]:leading-[15px] [@media(pointer:coarse)]:tracking-[-0.0121875em]"
                />
              </div>
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
        </motion.div>

        {selectedId === item.id && (
          <FullPostModal
            item={item}
            setClose={() => setSelectedId(false)}
            selectedId={selectedId}
          />
        )}
      </LayoutGroup>

      {/* delete modal */}
      <BottomModal
        isOpen={bottomModal}
        handleClose={() => setBottomModal(false)}
      >
        <div className="h-full w-full px-[12px] pt-[12px] pb-[24px]">
          <div
            className="bg-[#74899B] bg-opacity-[8%] rounded-[8px] transition duration-[250ms] hover:bg-[#647f98] active:bg-[#3e5061] active:bg-opacity-[15%] hover:bg-opacity-[15%] cursor-pointer p-[16px]"
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
