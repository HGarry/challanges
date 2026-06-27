import React from "react";

function Overview({ item, setIsDarkMode }) {
  const arrowUp = "../images/icon-up.svg";
  const arrowDown = "../images/icon-down.svg";
  console.log(item?.type);
  return (
    <div className="mb-6">
      <div className="bg-bg-card rounded-xs p-5 cursor-pointer hover:bg-gray-200">
        <div className="flex justify-between items-center mb-4">
          <p>{item?.metric}</p>
          <img src={item?.social} alt="" />
        </div>
        <div className="flex justify-between items-center ">
          <h5 className="text-3xl font-bold text-text">{item?.value}</h5>
          <div className="flex items-center justify-center gap-2">
            <img src={item?.isfollowerup ? arrowUp : arrowDown} alt="" />
            <span
              className={item?.isfollowerup ? "text-Green-500" : "text-Red-500"}
            >
              {item?.change}
              {item?.unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
