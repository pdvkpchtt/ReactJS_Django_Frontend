import { useEffect, useState } from "react";

import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const ThemeHandler = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    )
      element.classList.add("dark");
    else element.classList.remove("dark");
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage))
      if (e.matches) element.classList.add("dark");
      else element.classList.remove("dark");
  });

  return (
    <div
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className={`relative h-[40px] w-[40px] bg-[#79a7d3] hover:bg-[#397fbf] active:bg-[#1a5c99] cursor-pointer transition duration-[250ms] rounded-full`}
    >
      <SunIcon
        style={`${
          theme === "dark" ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
        } absolute left-[7.5px] top-[7.5px] transition duration-[500ms]`}
      />

      <MoonIcon
        style={`${
          theme === "dark"
            ? "opacity-100 rotate-0"
            : "opacity-0 rotate-[-180deg]"
        } absolute left-[7.5px] top-[7.5px] transition duration-[500ms]`}
      />
    </div>
  );
};

export default ThemeHandler;
