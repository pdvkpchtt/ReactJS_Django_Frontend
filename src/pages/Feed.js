import { useState } from "react";

import FeedNav from "../components/Feed/FeedNav";
import NavigationMobile from "../shared/ui/NavigationMobile";
import Post from "../components/Feed/Post";

const posts = [
  {
    name: "Danil Kabirov",
    title: "Post title 2 dajjdsaklk sdsdd",
    text: "Post text post text text post text post text post text post textpost text post text text post text text post text text post text",
    createdAt: "8 часов назад",
    likes: 3,
  },
];

const Feed = () => {
  const [navState, setNavState] = useState([
    { id: 0, active: true, name: "Лента" },
    { id: 1, active: false, name: "Новости" },
    { id: 2, active: false, name: "Валюта" },
  ]);

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
      <div className="w-full flex flex-col gap-[12px] [@media(hover)]:mr-[278px]">
        {[...posts, ...posts, ...posts, ...posts].map((item, key) => (
          <Post item={item} key={key} />
        ))}
      </div>
      <FeedNav navState={navState} setNavState={setNavState} />
    </div>
  );
};

export default Feed;
