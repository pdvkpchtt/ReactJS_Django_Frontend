import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { AccountContext } from "../components/AccountContext";
import Left from "../components/Profile/Left";
import Right from "../components/Profile/Right";
import getUserById from "../server/profile/getUserById";
import CustomLoader from "../shared/ui/CustomLoader";
import NavigationMobile from "../shared/ui/NavigationMobile";
import NavigationPc from "../shared/ui/NavigationPc";

const Profile = () => {
  const { pathname } = useLocation();

  const { id } = useParams();
  const { user } = useContext(AccountContext);

  const [navState, setNavState] = useState([
    { id: 0, active: true, name: "Профиль" },
    { id: 1, active: false, name: "Посты" },
  ]);

  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    if (pathname === "/profile") setUserInfo(await getUserById(user.userId));
    else setUserInfo(await getUserById(id));
  };

  useEffect(() => {
    getUserInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userInfo.user)
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <CustomLoader />
      </div>
    );

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
          <Left getUserInfo={getUserInfo} data={userInfo.user} />
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
            data={userInfo.user}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
