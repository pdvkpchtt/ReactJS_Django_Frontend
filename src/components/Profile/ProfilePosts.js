import { LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

import getProflePosts from "../../server/profile/getProflePosts";
import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";
import Card from "../../shared/ui/Card";
import CustomLoader from "../../shared/ui/CustomLoader";
import Post from "../Feed/Post";

const ProfilePosts = ({ userId }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [posts, setPosts] = useState([]);
  const [canShow, setCanShow] = useState(false);

  const getPostsHandle = () => {
    setTimeout(async () => {
      const data = await getProflePosts(userId, offset);
      setPosts([...posts, ...data.data]);
      if (data.data.length !== 0) setOffset(offset + 8);
      else setHasNextPage(false);
    }, [1000]);
    setTimeout(async () => {
      setCanShow(true);
    }, [1500]);
  };

  useEffect(() => {
    getPostsHandle();
    setOffset(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutGroup>
      <div className="w-full flex flex-col gap-[12px]">
        {posts.length === 0 && canShow && (
          <Card styles="h-fit flex flex-col gap-[6px] text-center">
            <TextMain text="Постов нет(" styles="font-medium leading-[14px]" />
            <TextSecondary
              text="Посты пишутся в ленте"
              styles="text-[12px] font-medium leading-[12px]"
            />
          </Card>
        )}
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
  );
};

export default ProfilePosts;
