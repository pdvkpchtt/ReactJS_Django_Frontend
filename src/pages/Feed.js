import { useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

import CustomLoader from "../shared/ui/CustomLoader";
import FeedNav from "../components/Feed/FeedNav";
import Post from "../components/Feed/Post";
import getPosts from "../server/feed/getPosts";

const Feed = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPostsHandle = () => {
    setTimeout(async () => {
      const data = await getPosts(offset);
      console.log("Client posts: ", data);
      setPosts([...posts, ...data.data]);
      if (data.data.length !== 0) setOffset(offset + 8);
      else setHasNextPage(false);
    }, [1000]);
  };

  useEffect(() => {
    getPostsHandle();
    setOffset(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className=" 
        h-full w-full
        [@media(pointer:coarse)]:overflow-y-auto [@media(pointer:coarse)]:p-[12px] [@media(pointer:coarse)]:mt-[38px] [@media(pointer:coarse)]:mb-[62px]
        [@media(hover)]:mt-[62px] [@media(hover)]:gap-[16px] [@media(hover)]:flex [@media(hover)]:flex-row
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
            django
          </p>
        </div>
      </div>
      {/* header */}

      <LayoutGroup>
        <div className="w-full flex flex-col gap-[12px] [@media(hover)]:mr-[278px]">
          {posts.map((item, key) => (
            <Post
              item={item}
              key={key}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
          {hasNextPage && (
            <Waypoint
              onEnter={async () => {
                console.log("Enter waypoint");
                getPostsHandle(offset);
              }}
              topOffset="0px"
            >
              <div className="w-full flex  justify-center items-center h-full">
                <CustomLoader diameter={36} />
              </div>
            </Waypoint>
          )}
        </div>
      </LayoutGroup>

      <FeedNav />
    </div>
  );
};

export default Feed;
