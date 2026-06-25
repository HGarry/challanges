import React from "react";
import data from "/data.json";
import Overview from "./Overview";

function Overviews({ setIsDarkMode }) {
  return (
    <div className="min-w-4xl max-w-6xl">
      <div className="grid grid-cols-4 grid-rows-2 gap-5">
        {data.overviewToday.map((item, index) => {
          return <Overview key={index} item={item} setIsDarkMode={setIsDarkMode} />;
        })}
      </div>
    </div>
  );
}

export default Overviews;
