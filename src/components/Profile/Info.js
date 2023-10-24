import TextMain from "../../shared/text/TextMain";
import TextSecondary from "../../shared/text/TextSecondary";
import Card from "../../shared/ui/Card";

const Info = () => {
  return (
    <Card styles="h-fit flex flex-col gap-[6px] text-center">
      <TextMain
        text="Здесь могла быть ваша реклама :)"
        styles="font-medium leading-[14px]"
      />
      <TextSecondary
        text="По вопросам рекламы: kabirdanilov14@gmail.com"
        styles="text-[12px] font-medium leading-[12px]"
      />
    </Card>
  );
};

export default Info;
