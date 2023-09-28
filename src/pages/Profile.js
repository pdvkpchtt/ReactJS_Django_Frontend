import { useState } from "react";

import Left from "../components/Profile/Left";
import Right from "../components/Profile/Right";
import { ButtonGhost } from "../shared/ui/Button";
import Card from "../shared/ui/Card";
import EditModal from "../components/Profile/EditModal";
import NavigationMobile from "../shared/ui/NavigationMobile";

import SettingsIcon from "../shared/icons/SettingsIcon";

const proflieData = {
  name: "Danil Kabirov",
  about: "Designer from SanFrancisco",
  age: "23",
  birth: "14.01.2000",
};

const Profile = () => {
  const [modalState, setModalState] = useState(false);
  const [navState, setNavState] = useState([
    { id: 0, active: true, name: "Профиль" },
    { id: 1, active: false, name: "Посты" },
  ]);

  return (
    <>
      <div className="flex flex-row w-full h-full [@media(pointer:coarse)]:px-[12px] [@media(pointer:coarse)]:flex-col gap-[16px]">
        <NavigationMobile navState={navState} useState={setNavState} />

        <div
          className={`${
            navState[1].active && "[@media(pointer:coarse)]:hidden"
          } flex flex-col [@media(pointer:coarse)]:mt-[38px] min-w-[260px] [@media(pointer:coarse)]:py-[12px] gap-[16px]`}
        >
          <Left data={proflieData} />

          <Card>
            <ButtonGhost
              text="Редактировать профиль"
              onClick={() => setModalState(true)}
            >
              <SettingsIcon />
            </ButtonGhost>
          </Card>
        </div>

        <div
          className={`${
            navState[0].active && "[@media(pointer:coarse)]:hidden"
          } w-full h-full overflow-y-auto [@media(pointer:coarse)]:mt-[38px] [@media(pointer:coarse)]:py-[12px]`}
        >
          <Right
            navState={navState}
            setNavState={setNavState}
            data={proflieData}
          />
        </div>
      </div>

      {/* modal */}
      <EditModal state={modalState} setstate={setModalState} />
      {/* modal */}
    </>
  );
};

export default Profile;
