import React from "react";

function Social({ item }) {
  const arrowUp = "../images/icon-up.svg";
  const arrowDown = "../images/icon-down.svg";
  return (
    <div
      className={`bg-bg-card w-56 px-8 py-5 flex flex-col items-center ${item?.color} border-t-5  rounded-xs`}
    >
      <div className="flex items-center gap-3">
        <img src={item?.social} alt="social" />
        <p>{item?.handle}</p>
      </div>
      <div className="my-4">
        <h1 className="text-4xl text-text font-bold">{item?.followers} </h1>
        <p className="tracking-widest text-xs">{item?.type}</p>
      </div>

      <div className="flex gap-3 items-center justify-center">
        <img src={item?.isfollowerup ? arrowUp : arrowDown} alt="" />
        <span>{item?.changeToday} Today</span>
      </div>
    </div>
  );
}

export default Social;
