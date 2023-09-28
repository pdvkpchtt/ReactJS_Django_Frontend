import { Routes, Route } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import OthersProfile from "./OthersProfile";
import Profile from "./Profile";

const NavHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/feed" element={<div>feed</div>} />
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
