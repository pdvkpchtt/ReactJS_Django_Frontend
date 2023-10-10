import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AccountContextWrap from "./components/AccountContext";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Layout from "./components/Layout";
import NavHandler from "./pages/NavHandler";
import ThemeHandler from "./shared/ui/ThemeHandler";

function App() {
  const { pathname } = useLocation();

  return (
    <AccountContextWrap>
      <Header />
      <Layout>
        <div className="[@media(hover)]:hidden fixed top-[5px] z-[10] right-[12px]">
          <ThemeHandler />
        </div>

        <NavHandler />
      </Layout>

      {pathname !== "/auth" && <BottomNav />}

      <ToastContainer
        toastClassName={() =>
          "relative flex rounded-[20px] select-none [@media(pointer:coarse)]:rounded-[0px] shadow h-[50px] p-1 justify-between overflow-hidden cursor-pointer bg-[#f6f6f8] text-[#2c2c2c] dark:bg-[#141414] dark:text-white"
        }
      />
    </AccountContextWrap>
  );
}

export default App;
