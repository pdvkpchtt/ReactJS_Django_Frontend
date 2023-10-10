import { useContext, useState } from "react";

import Card from "../../shared/ui/Card";
import EmptyAvatar from "../../shared/ui/EmptyAvatar";
import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";
import { ButtonGhost } from "../../shared/ui/Button";
import EditModal from "../../components/Profile/EditModal";
import { AccountContext } from "../AccountContext";

import SettingsIcon from "../../shared/icons/SettingsIcon";

const Left = ({ data }) => {
  const { user } = useContext(AccountContext);
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Card styles="min-w-[260px] [@media(hover)]:max-w-[260px] w-full flex flex-col gap-[12px]">
        <EmptyAvatar />

        <div className="flex flex-col gap-[6px]">
          <TextMain
            text={data.name}
            styles="font-medium text-[18px] leading-[21.6px] tracking-[-0.025em]"
          />
          <TextSecondary
            text={`${data.about}`}
            styles="font-medium text-[16px] leading-[16px] tracking-[-0.015em]"
          />
          <TextSecondary
            text={`${data.location}`}
            styles="font-medium text-[14px] leading-[16px] tracking-[-0.015em]"
          />
          <TextSecondary
            text={`${data.birth}`}
            styles="font-medium text-[14px] leading-[16px] tracking-[-0.015em]"
          />
        </div>
      </Card>

      <Card>
        <ButtonGhost
          text="Редактировать профиль"
          onClick={() => setModalState(true)}
        >
          <SettingsIcon />
        </ButtonGhost>
      </Card>

      {/* modal */}
      <EditModal data={data} state={modalState} setstate={setModalState} />
      {/* modal */}
    </>
  );
};

export default Left;
