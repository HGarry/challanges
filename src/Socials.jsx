import React from "react";
import data from "/data.json";
import Social from "./Social";

function Socials({ setIsDarkMode }) {
  console.log(data);

  return (
    <>
      <div className="flex gap-5 items-center justify-center mb-10">
        {data.socialProfiles.map((item, index) => {
          return <Social setIsDarkMode={setIsDarkMode} key={index} item={item} />;
        })}
      </div>
    </>
  );
}

export default Socials;
