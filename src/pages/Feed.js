import { useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

import CustomLoader from "../shared/ui/CustomLoader";
import FeedNav from "../components/Feed/FeedNav";
import NavigationMobile from "../shared/ui/NavigationMobile";
import Post from "../components/Feed/Post";
import getPosts from "../server/feed/getPosts";

const Feed = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [navState, setNavState] = useState([
    { id: 0, active: true, name: "Лента" },
    { id: 1, active: false, name: "Новости" },
    { id: 2, active: false, name: "Валюта" },
  ]);

  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPostsHandle = () => {
    setTimeout(async () => {
      const data = await getPosts(offset);
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
      <NavigationMobile
        navState={navState}
        useState={setNavState}
        layoutId="feed mobile"
      />

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
              topOffset="50px"
            >
              <div className="w-full flex  justify-center items-center h-full">
                <CustomLoader diameter={36} />
              </div>
            </Waypoint>
          )}
        </div>
      </LayoutGroup>

      <FeedNav navState={navState} setNavState={setNavState} />
    </div>
  );
};

export default Feed;
