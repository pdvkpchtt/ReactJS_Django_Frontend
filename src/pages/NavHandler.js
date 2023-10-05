import { Routes, Route } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Feed from "./Feed";
import Profile from "./Profile";
import OthersProfile from "./OthersProfile";

const NavHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/users" element={<div>users</div>} />
      <Route path="/profile">
        <Route path="" element={<Profile />} />
        <Route path=":id" element={<OthersProfile />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default NavHandler;
