import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Feed from "./Feed";
import Profile from "./Profile";
import Search from "./Search";
import Auth from "./Auth";
import { AccountContext } from "../components/AccountContext";
import CustomLoader from "../shared/ui/CustomLoader";

const NavHandler = () => {
  const { user } = useContext(AccountContext);

  return user.loggedIn === null ? (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <CustomLoader />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/users" element={<Search />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile">
        <Route path="" element={<Profile />} />
        <Route path=":id" element={<Profile />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default NavHandler;
