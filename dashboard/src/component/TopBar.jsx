import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="flex h-1/10">
      <div className=" w-[35%] flex justify-around shadow-sm">
        <div className="flex items-center text-sm">
          NIFTY 50 &nbsp; &nbsp;
          <div className="text-red-600">{100.2}</div>
        </div>
        <div className="flex items-center text-sm">
          SENSEX &nbsp;&nbsp;
          <div className="text-red-600">{100.2}</div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
