import { useSelector } from "react-redux";

function SeriesTile({ series }) {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gray-800 text-gray-200 border-gray-600 px-[1rem]  flex flex-col py-1.5 items-center  rounded-md "
          : "bg-white px-[1rem]  flex flex-col py-1.5 items-center  rounded-md "
      }`}
    >
      <h1>Total Series</h1>
      <h3 className="font-semibold text-[30px]">{series?.length}</h3>
    </div>
  );
}

export default SeriesTile;
