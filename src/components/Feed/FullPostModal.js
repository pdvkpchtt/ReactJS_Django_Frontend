import { motion } from "framer-motion";

import EmptyAvatar from "../../shared/ui/EmptyAvatar";
import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";

import LikeIcon from "../../shared/icons/LikeIcon";
import RepostIcon from "../../shared/icons/RepostIcon";
import CrossIcon from "../../shared/icons/CrossIcon";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
require("dayjs/locale/ru");
dayjs.locale("ru");
var updateLocale = require("dayjs/plugin/updateLocale");
dayjs.extend(updateLocale);

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const FullPostModal = ({ item, setClose = () => {}, selectedId }) => {
  return (
    <motion.div
      initial={"initial"}
      animate={"isOpen"}
      exit={"exit"}
      variants={modalVariant}
      className="fixed [@media(pointer:coarse)]:hidden top-0 left-0 w-full h-full bg-[#000] bg-opacity-[20%] z-50"
    >
      <motion.div
        layoutId={selectedId}
        className="w-[700px] h-fit mx-auto mt-[78px] dark:bg-[#141414] bg-[#F6F6F8] bottom-0 p-[12px] rounded-[20px]"
      >
        <div className="flex flex-row gap-[8px]">
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
      </motion.div>
    </motion.div>
  );
};

export default FullPostModal;
