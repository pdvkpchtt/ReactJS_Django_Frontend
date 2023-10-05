import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { SearchInput } from "../shared/ui/Input";
import UserCard from "../components/Search/UserCard";

const Search = () => {
  const [trigger, settrigger] = useState(false);
  const [scroll, setScroll] = useState(false);

  const [newScroll, setNewScroll] = useState(scroll);
  useEffect(() => {
    if (scroll > newScroll) settrigger(true);
    else if (scroll < newScroll) settrigger(false);

    setTimeout(() => {
      setNewScroll(scroll);
    }, [50]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  const handleBodyScroll = (e) => {
    setScroll(e.currentTarget.scrollY);
  };

  window.addEventListener("scroll", handleBodyScroll);

  const isMobile = useMediaQuery({ query: "(pointer:coarse)" });

  return (
    <div
      className=" 
    h-full w-full
    [@media(pointer:coarse)]:overflow-y-auto [@media(pointer:coarse)]:p-[12px] [@media(pointer:coarse)]:mt-[63px] [@media(pointer:coarse)]:mb-[62px]
    [@media(hover)]:mt-[62px] [@media(hover)]:gap-[16px] [@media(hover)]:flex [@media(hover)]:flex-col 
  "
    >
      <motion.div
        animate={
          newScroll > 76 && !isMobile && trigger
            ? {
                y: -86,
              }
            : { y: 0 }
        }
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-[#212122] fixed  p-[12px] border-b-[#e7e7e7] dark:border-b-[#282828]
      [@media(hover)]:rounded-[20px] [@media(hover)]:w-[968px]
      [@media(pointer:coarse)]:left-0  [@media(pointer:coarse)]:top-0 [@media(pointer:coarse)]:w-full 
      [@media(pointer:coarse)]:border-b-[0.7px] z-[9]
      "
      >
        <SearchInput placeholder="Поиск пользователей..." />
      </motion.div>

      <div className="[@media(hover)]:mt-[76px] flex flex-col gap-[8px]">
        {[...Array(50)].map((item, key) => (
          <UserCard key={key} />
        ))}
      </div>
    </div>
  );
};

export default Search;
