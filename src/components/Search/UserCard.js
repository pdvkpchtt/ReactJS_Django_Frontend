import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";
import Card from "../../shared/ui/Card";
import EmptyAvatar from "../../shared/ui/EmptyAvatar";

const UserCard = ({ item }) => {
  return (
    <Card styles="flex flex-row gap-[8px]">
      <EmptyAvatar little />

      <div className="flex flex-col gap-[4px]">
        <TextMain
          text={item?.name || "Danil Kabirov"}
          styles="truncate leading-[14px] font-medium"
        />
        <TextSecondary
          text={item?.loaction || "Ufa, Russia"}
          styles="truncate leading-[13px] select-none text-[13px] font-medium"
        />
      </div>
    </Card>
  );
};

export default UserCard;
