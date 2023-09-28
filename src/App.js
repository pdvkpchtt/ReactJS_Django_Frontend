import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ThemeHandler from "./shared/ui/ThemeHandler";

function App() {
  // bg-white dark:bg-[#212122]

  return (
    <div className="bg-[#f6f6f8] dark:bg-[#141414] transition duration-[250ms]">
      <Header />
      <Layout>
        <ThemeHandler />
      </Layout>
      <BottomNav />
    </div>
  );
}

export default App;
