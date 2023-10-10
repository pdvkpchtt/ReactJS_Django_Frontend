import { useContext } from "react";
import { Link } from "react-router-dom";

import {
  ComputerIcon,
  ProfileIcon,
  SearchIcon,
} from "../shared/icons/NavIcons";
import ThemeHandler from "../shared/ui/ThemeHandler";
import { AccountContext } from "./AccountContext";

const Header = () => {
  const { user } = useContext(AccountContext);
  console.log(user);

  return (
    <header className="w-full fixed h-[62px] [@media(pointer:coarse)]:hidden z-[50] transition duration-[250ms] bg-white dark:bg-[#212122] border-b-[0.7px] border-b-[#e7e7e7] dark:border-b-[#282828]">
      <div className="flex flex-row h-[62px] justify-between max-w-[1012px] px-[16px] items-center mx-auto">
        <p className="font-bold text-[32px] text-[#79a7d3] leading-[38.4px] tracking-[-0.023em] mt-[8px] mb-[16px] select-none">
          django
        </p>

        {user.loggedIn !== null && user.loggedIn !== false && (
          <div className="flex flex-row gap-[64px] mt-[17px] mb-[20px]">
            <Link to={"/feed"}>
              <ComputerIcon />
            </Link>

            <Link to={"/users"}>
              <SearchIcon />
            </Link>

            <Link to={"/profile"}>
              <ProfileIcon />
            </Link>
          </div>
        )}

        <ThemeHandler />
      </div>
    </header>
  );
};

export default Header;
