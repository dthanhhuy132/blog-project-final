import React from "react";
import HeaderControl from "./HeaderControl";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";

const Header: React.FC = () => {
  return (
    <div className="container-full flex justify-between items-center py-[5px] shadow-md px-2 lg:px-5">
      <div className="lg:w-1/4">
        <HeaderLogo />
      </div>
      <div className="flex-1 sm:mx-10 lg:w-2/4">
        <HeaderSearch />
      </div>
      <div className="lg:w-1/4">
        <HeaderControl />
      </div>
    </div>
  );
};

export default Header;
