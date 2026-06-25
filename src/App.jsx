import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Nav from "./Nav";
import Social from "./Social";
import Socials from "./Socials";
import Overview from "./Overview";
import Overviews from "./Overviews";

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <div
        className={`bg-bg flex justify-center items-center w-screen h-screen mx-auto px-5 ${isDarkMode ? "dark" : ""}`}
      >
        <div className="md:min-w-4xl md:max-w-6xl">
          <Nav setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          <Socials setIsDarkMode={setIsDarkMode} />

          <h5 className="mb-6 font-bold text-text text-xl">Overview - Today</h5>

          <Overviews setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
