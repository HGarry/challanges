import data from "/data.json";
import Social from "./Social";

function Socials({ setIsDarkMode }) {
  console.log(data);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {data.socialProfiles.map((item, index) => {
          return (
            <Social setIsDarkMode={setIsDarkMode} key={index} item={item} />
          );
        })}
      </div>
    </>
  );
}

export default Socials;
