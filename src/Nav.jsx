import React, { useState } from "react";

function Nav({ setIsDarkMode, isDarkMode }) {
  return (
    <div className="flex justify-between items-center  py-4 mb-7">
      <div className="">
        <h2 className="text-text text-2xl font-bold ">
          Social Media Dashboard
        </h2>
        <p className="text-bg-text">Total Followers: 23,004</p>
      </div>

      <div className="flex">
        <p>Dark Mode</p>
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
          className={`bg-Green-500 p-3 rounded-2xl w-3`}
        ></button>
      </div>
    </div>
  );
}

export default Nav;
