import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ThemeHandler from "./shared/ui/ThemeHandler";

function App() {
  // bg-white dark:bg-[#212122]
  // const [navState, setNavState] = useState([
  //   { id: 0, active: true, name: "Для вас" },
  //   { id: 1, active: false, name: "Образование" },
  //   { id: 2, active: false, name: "Офтоп" },
  // ]);

  return (
    <div className="bg-[#f6f6f8] dark:bg-[#141414] transition duration-[250ms]">
      <Header />
      <Layout>
        <div className="[@media(hover)]:hidden fixed top-[20px] right-[20px]">
          <ThemeHandler />
        </div>
      </Layout>
      <BottomNav />
    </div>
  );
}

export default App;
