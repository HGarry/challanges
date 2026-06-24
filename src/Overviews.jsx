import React from "react";
import data from "/data.json";
import Overview from "./Overview";

function Overviews() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-2 gap-5">
        {data.overviewToday.map((item, index) => {
          return <Overview key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Overviews;
