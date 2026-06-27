
function Social({ item }) {
  const arrowUp = "../images/icon-up.svg";
  const arrowDown = "../images/icon-down.svg";
  return (
    <div className={`${item?.color} w-full rounded-xs mb-6 md:mb-0`}>
      <div
        className={`bg-bg-card  px-8 py-5 flex flex-col items-center justify-center  mt-1 hover:bg-hover cursor-pointer`}
      >
        <div className="flex items-center gap-3">
          <img src={item?.social} alt="social" />
          <p>{item?.handle}</p>
        </div>
        <div className="my-4">
          <h1 className="text-6xl text-text font-bold text-center">
            {item?.followers}{" "}
          </h1>
          <p className="mt-2 tracking-[0.5rem] text-xs uppercase text-center">
            {item?.type}
          </p>
        </div>

        <div className="flex gap-3 items-center justify-center">
          <img src={item?.isfollowerup ? arrowUp : arrowDown} alt="" />
          <span
            className={item?.isfollowerup ? "text-Green-500" : "text-Red-500"}
          >
            {item?.changeToday} Today
          </span>
        </div>
      </div>
    </div>
  );
}

export default Social;
