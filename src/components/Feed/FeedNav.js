import Card from "../../shared/ui/Card";
import Button from "../../shared/ui/Button";

const FeedNav = ({ navState, setNavState }) => {
  const clickHandler = (id, setFunc, state) => {
    setFunc(
      state.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return (
    <div className="[@media(pointer:coarse)]:hidden fixed ml-[716px] w-[260px]">
      <Card styles="h-fit flex flex-col gap-[12px]">
        {navState.map((item, key) => (
          <div
            className={` ${
              item.active
                ? "bg-[#79a7d3] text-[#fff] hover:bg-[#397fbf] active:bg-[#1a5c99]"
                : "text-[#2c2c2c] dark:text-[#8f8f8f]"
            } text-[15px] px-[6px] py-[3px] rounded-[8px] cursor-pointer  select-none leading-[20px] tracking-[-0.0140625em] transition duration-[250ms] font-medium`}
            onClick={() => clickHandler(key, setNavState, navState)}
          >
            {item.name}
          </div>
        ))}
      </Card>

      <div className="mt-[24px]">
        <Button />
      </div>
    </div>
  );
};

export default FeedNav;
