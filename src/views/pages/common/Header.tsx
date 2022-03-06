import React from "react";
import logo from "../../../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="container mx-auto bg-slate-400">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <input type="text" className="p-3 border-none w-full" />
          <button>search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
