import { useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AccountContext = createContext();

const AccountContextWrap = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null, userId: null });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    fetch(`http://localhost:8000/auth/login`, {
      credentials: "include",
    })
      .catch((err) => {
        setUser({ loggedIn: false });
        return;
      })
      .then((r) => {
        if (!r || !r.ok || r.status >= 400) {
          setUser({ loggedIn: false });
          return;
        }
        return r.json();
      })
      .then((data) => {
        if (!data) {
          setUser({ loggedIn: false });
          return;
        }
        setUser({ ...data });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (pathname === "/auth" && user.loggedIn !== null && user.loggedIn !== false)
    navigate("/feed");

  if (pathname !== "/auth" && user.loggedIn === false) navigate("/auth");

  if (pathname === "/") navigate("/feed");

  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContextWrap;
