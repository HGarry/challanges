import { useState } from "react";

import "./App.css";
import Nav from "./Nav";
import Socials from "./Socials";
import Overviews from "./Overviews";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <div
        className={`bg-bg md:flex justify-center items-center py-5 md:w-screen md:h-screen mx-auto px-5 ${isDarkMode ? "dark" : ""}`}
      >
        <div className="w-full lg:min-w-4xl lg:max-w-6xl">
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
