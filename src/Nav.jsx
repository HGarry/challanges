import React, { useState } from "react";

function Nav({ setIsDarkMode, isDarkMode }) {
  return (
    <div className="md:flex justify-between  items-center   py-4 mb-7">
      <div className="border-b-2 md:border-0 mb-5 pb-5 border-border">
        <h2 className="text-text text-2xl font-bold ">
          Social Media Dashboard
        </h2>
        <p className="text-bg-text">Total Followers: 23,004</p>
      </div>

      <div className="flex gap-3 justify-between ">
        <p>Dark Mode</p>
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
          className={`bg-toggle p-3 rounded-full w-12 cursor-pointer `}
        ></button>
      </div>
    </div>
  );
}

export default Nav;
