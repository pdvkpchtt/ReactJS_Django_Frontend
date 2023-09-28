import { Oval } from "react-loader-spinner";

const CustomLoader = ({
  diameter = 50,
  strokeWidth = 5,
  strokeWidthSecondary = 5,
}) => {
  return (
    <Oval
      height={diameter}
      width={diameter}
      color="#79a7d3"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#79a7d3"
      strokeWidth={strokeWidth}
      strokeWidthSecondary={strokeWidthSecondary}
    />
  );
};

export default CustomLoader;
