import React from "react";

function Overview({ item }) {
  const arrowUp = "../images/icon-up.svg";
  const arrowDown = "../images/icon-down.svg";
  console.log(item?.type);
  return (
    <div>
      <div className="bg-bg-card rounded-xl p-3 w-56">
        <div className="flex justify-between items-center mb-4">
          <p>{item?.metric}</p>
          <img src={item?.social} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <h5>{item?.value}</h5>
          <div className="">
            <img src={item?.isfollowerup ? arrowUp : arrowDown} alt="" />
            <span>
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
