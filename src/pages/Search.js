import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

import UserCard from "../components/Search/UserCard";
import getUsers from "../server/search/getUsers";
import CustomLoader from "../shared/ui/CustomLoader";

const Search = () => {
  // fetching
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsersHandle = () => {
    setTimeout(async () => {
      const data = await getUsers("", offset);
      console.log("Client users: ", data);
      setUsers([...users, ...data.data]);
      if (data.data.length !== 0) setOffset(offset + 10);
      else setHasNextPage(false);
    }, [1000]);
  };

  useEffect(() => {
    getUsersHandle();
  }, [offset]);
  // fetching

  return (
    <div
      className=" 
    h-full w-full
    [@media(pointer:coarse)]:overflow-y-auto [@media(pointer:coarse)]:p-[12px] [@media(pointer:coarse)]:mt-[38px] [@media(pointer:coarse)]:mb-[62px]
    [@media(hover)]:mt-[62px] [@media(hover)]:gap-[16px] [@media(hover)]:flex [@media(hover)]:flex-col 
  "
    >
      {/* header */}
      <div
        className={`fixed bg-white h-[38px] dark:bg-[#212122] [@media(pointer:coarse)]:border-b-[0.7px] transition duration-[250ms] p-[12px] [@media(pointer:coarse)]:border-b-[#e7e7e7] [@media(pointer:coarse)]:dark:border-b-[#282828]
      [@media(hover)]:hidden
      [@media(pointer:coarse)]:left-0  [@media(pointer:coarse)]:top-0 [@media(pointer:coarse)]:w-full z-[9]
      `}
      >
        <div
          className={`[@media(hover)]:rounded-[20px] [@media(hover)]:border-[1px] [@media(pointer:coarse)]:max-w-[468px] [@media(pointer:coarse)]:mx-auto
      `}
        >
          <p className="font-bold text-[18px] text-[#79a7d3] leading-[14px] tracking-[-0.023em] select-none">
            students
          </p>
        </div>
      </div>
      {/* header */}

      <div className="flex flex-col gap-[8px]">
        {users.map((item, key) => (
          <UserCard key={key} item={item} />
        ))}
        {hasNextPage && (
          <Waypoint
            onEnter={async () => {
              console.log("Enter waypoint");
              getUsersHandle(offset);
            }}
            topOffset="0px"
          >
            <div className="w-full flex  justify-center items-center h-full">
              <CustomLoader diameter={36} />
            </div>
          </Waypoint>
        )}
      </div>
    </div>
  );
};

export default Search;
