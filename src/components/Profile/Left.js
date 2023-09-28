import Card from "../../shared/ui/Card";
import EmptyAvatar from "../../shared/ui/EmptyAvatar";
import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";

const Left = ({ data }) => {
  return (
    <Card styles="min-w-[260px] [@media(hover)]:fixed [@media(hover)]:max-w-[260px] w-full flex flex-col gap-[12px]">
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
          text={`${data.age} y.o.`}
          styles="font-medium text-[14px] leading-[16px] tracking-[-0.015em]"
        />
        <TextSecondary
          text={`${data.birth}`}
          styles="font-medium text-[14px] leading-[16px] tracking-[-0.015em]"
        />
      </div>
    </Card>
  );
};

export default Left;
