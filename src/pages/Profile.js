import { useState } from "react";

import Left from "../components/Profile/Left";
import Right from "../components/Profile/Right";
import NavigationMobile from "../shared/ui/NavigationMobile";
import NavigationPc from "../shared/ui/NavigationPc";

const proflieData = {
  name: "Danil Kabirov",
  about: "Designer from SanFrancisco",
  birth: "14.01.2000",
  location: "Ufa",
};

const Profile = () => {
  const [navState, setNavState] = useState([
    { id: 0, active: true, name: "Профиль" },
    { id: 1, active: false, name: "Посты" },
    { id: 2, active: false, name: "Оценено" },
  ]);

  return (
    <>
      <div className="flex flex-row w-full h-full [@media(pointer:coarse)]:flex-col gap-[16px]">
        <NavigationMobile
          layoutId="mobile profile"
          navState={navState}
          useState={setNavState}
        />

        <div
          className={`${
            !navState[0].active && "[@media(pointer:coarse)]:hidden"
          } flex flex-col  min-w-[260px] gap-[16px] 
          [@media(hover)]:fixed [@media(hover)]:top-[78px]  
          [@media(pointer:coarse)]:mt-[38px] [@media(pointer:coarse)]:overflow-y-auto [@media(pointer:coarse)]:mb-[62px] [@media(pointer:coarse)]:p-[12px]`}
        >
          <Left data={proflieData} />
        </div>

        <div
          className={`${
            navState[0].active && "[@media(pointer:coarse)]:hidden"
          } w-full h-full 
          [@media(pointer:coarse)]:overflow-y-auto [@media(pointer:coarse)]:p-[12px] [@media(pointer:coarse)]:mt-[38px] [@media(pointer:coarse)]:mb-[62px]
          [@media(hover)]:mt-[62px] [@media(hover)]:ml-[276px]`}
        >
          <NavigationPc
            layoutId="pc profile"
            navState={navState}
            useState={setNavState}
          />

          <Right
            navState={navState}
            setNavState={setNavState}
            data={proflieData}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
