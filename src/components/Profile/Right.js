import Info from "./Info";
import ProfilePosts from "./ProfilePosts";

const Right = ({ navState, setNavState, data }) => {
  return (
    <>
      {/* {navState[0].active && <Info />} */}
      {navState[0].active && <ProfilePosts userId={data.id} />}
    </>
  );
};

export default Right;
