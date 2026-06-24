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
      <div className="flex flex-col justify-center">
        <Nav />
        <Socials />

        <h5 className="">Overview - Today</h5>

        <Overviews />
      </div>
    </>
  );
}

export default App;
