import { useParams } from "react-router-dom";

const OthersProfile = () => {
  const { id } = useParams();

  return <div className="mt-[78px]">Id: {id}</div>;
};

export default OthersProfile;
