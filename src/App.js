import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Layout from "./components/Layout";
import NavHandler from "./pages/NavHandler";
import ThemeHandler from "./shared/ui/ThemeHandler";

function App() {
  // bg-white dark:bg-[#212122]
  // const [navState, setNavState] = useState([
  //   { id: 0, active: true, name: "Для вас" },
  //   { id: 1, active: false, name: "Образование" },
  //   { id: 2, active: false, name: "Офтоп" },
  // ]);

  return (
    <>
      <Header />
      <Layout>
        <div className="[@media(hover)]:hidden fixed bottom-[83px] right-[20px]">
          <ThemeHandler />
        </div>

        <NavHandler />
      </Layout>
      <BottomNav />
    </>
  );
}

export default App;
