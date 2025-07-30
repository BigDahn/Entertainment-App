import { useSelector } from "react-redux";

function MainContainer({ children }) {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  return (
    <div
      className={`${
        isDarkMode
          ? " overflow-y-scroll   bg-[#18212f]"
          : " overflow-y-scroll  bg-[#f3f4f6]"
      }`}
    >
      {children}
    </div>
  );
}

export default MainContainer;
