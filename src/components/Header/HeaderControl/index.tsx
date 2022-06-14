import React from "react";
import HeaderControlThemeMode from "./HeaderControlThemeMode";
import HeaderPostCreate from "./HeaderPostCreate";
import HeaderUserLogedin from "./HeaderUserLogedin";

type Props = {};

const HeaderControl = (props: Props) => {
  return (
    <div className="flex justify-end items-center gap-1">
      <HeaderPostCreate />
      <HeaderControlThemeMode />
      <div className="flex items-center">
        {/* <div className="flex gap-2 ml-3 text-[1.1rem] text-gray-600 rounded-lg bg-gray-300 px-3 py-2 cursor-pointer hover:text-gray-900">
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-bars"></i>
        </div> */}
        <HeaderUserLogedin />
      </div>
    </div>
  );
};

export default HeaderControl;
