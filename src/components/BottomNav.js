import { Link } from "react-router-dom";

import {
  ComputerIcon,
  ProfileIcon,
  SearchIcon,
} from "../shared/icons/NavIcons";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 bg-white dark:bg-[#212122] transition duration-[250ms] h-[63px] border-t-[0.7px] border-t-[#e7e7e7] dark:border-t-[#282828] [@media(hover)]:hidden w-full pt-[10px] pb-[20px]">
      <div className="mx-auto w-full max-w-[500px] grid grid-cols-3">
        <Link
          to={"/feed"}
          className="flex cursor-pointer flex-col items-center gap-[1px] text-center"
        >
          <ComputerIcon />
        </Link>

        <Link
          to={"/users"}
          className="flex cursor-pointer flex-col items-center gap-[1px] text-center"
        >
          <SearchIcon />
        </Link>

        <Link
          to={"/profile"}
          className="flex cursor-pointer flex-col items-center gap-[1px] text-center"
        >
          <ProfileIcon />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
