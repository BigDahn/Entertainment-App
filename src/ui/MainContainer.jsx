import React from "react";

function MainContainer({ children }) {
  return <div className="overflow-y-scroll bg-[#f3f4f6]">{children}</div>;
}

export default MainContainer;
