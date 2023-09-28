import ThemeHandler from "../shared/ui/ThemeHandler";

const Header = () => {
  return (
    <header className="w-full h-[62px] [@media(pointer:coarse)]:hidden transition duration-[250ms] bg-white dark:bg-[#212122] border-b-[0.7px] border-b-[#e7e7e7] dark:border-b-[#282828]">
      <div className="flex flex-row h-[62px] justify-between max-w-[1012px] px-[16px] items-center mx-auto">
        <p className="font-bold text-[32px] text-[#79a7d3] leading-[38.4px] tracking-[-0.023em] mt-[8px] mb-[16px] select-none">
          django
        </p>

        <ThemeHandler />
      </div>
    </header>
  );
};

export default Header;
