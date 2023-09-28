import { useNavigate } from "react-router-dom";

import Button from "../shared/ui/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col [@media(pointer:coarse)]:justify-center">
      <p className="font-bold [@media(hover)]:mt-[calc(50vh-159px)] z-[2] text-[48px] leading-[58px] tracking-[-0.075em] text-[#79a7d3]">
        404
      </p>
      <p className="text-[26px] leading-[26px] tracking-[-1.5px] z-[2] transition duration-[250ms] text-[#2c2c2c] dark:text-[#fff]">
        Такой страницы не существует
      </p>
      <Button
        text="Обратно"
        styles="z-[2] mt-[12px] w-[140px]"
        onClick={() => navigate(-1)}
      />
      <div className="bg-[#f6f6f8] dark:bg-[#141414] transition z-[1] duration-[250ms] fixed left-0 top-0 w-full h-full" />
    </div>
  );
};

export default ErrorPage;
