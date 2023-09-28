import { useParams } from "react-router-dom";

const OthersProfile = () => {
  const { id } = useParams();

  return <div>Id: {id}</div>;
};

export default OthersProfile;
