import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fastPostCreate from "../../../assets/img/fastpost-create.png";
import postCreate from "../../../assets/img/post-create.png";
type Props = {};

const HeaderPostCreate = (props: Props) => {
  const navigate = useNavigate();
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div
      className="relative hidden md:flex items-center group mr-5"
      onMouseOver={() => {
        setIsShowMenu(true);
      }}
      onMouseLeave={() => setIsShowMenu(false)}
    >
      <i className="fa-solid fa-file-pen text-gray-500 cursor-pointer group-hover:text-gray-900 text-[1.8rem] dark:text-gray-300 dark:group-hover:text-blue-400 "></i>

      <div
        className={`absolute flex transition-all duration-300 origin-[50%_0%] opacity-0 z-[-1] scale-0
        ${
          isShowMenu && "!opacity-100 !z-100 !scale-100"
        } top-[200%] left-[30%] translate-x-[-50%] z-[100] gap-5 px-3 py-3 pb-1
        after:contents-[''] after:absolute after:top-[-30px] after:left-0 after:w-[250px] after:h-[60px] after:cursor-pointer
        before:contents-[''] before:absolute before:top-[-30px] before:left-[50%] before:translate-x-[-45%] before:border-[15px] before:border-[transparent_transparent_#6b7280_transparent]
        border-[1px] border-gray-400 dark:border-0 rounded-lg bg-white dark:bg-black`}
      >
        <div
          className="w-[150px] rounded-lg cursor-pointer"
          onClick={() => {
            navigate("/create-fast-post");
            setIsShowMenu(false);
          }}
        >
          <div className="w-full rounded-[18px] overflow-hidden hover:shadow-[0px_0px_10px_black] dark:hover:shadow-[0px_0px_20px_white]">
            <img
              src={fastPostCreate}
              alt=""
              className="w-full hover:scale-110 transition-all duration-200"
            />
          </div>
          <p className="py-2 dark:text-white">Create fast post</p>
        </div>

        <div
          className="w-[150px] rounded-lg cursor-pointer"
          onClick={() => {
            setIsShowMenu(false);
            navigate("/create-post");
          }}
        >
          <div className="w-full rounded-[18px] overflow-hidden hover:shadow-[0px_0px_10px_black] dark:hover:shadow-[0px_0px_20px_white]">
            <img
              src={postCreate}
              alt=""
              className="w-full hover:scale-110 transition-all duration-200"
            />
          </div>
          <p className="py-2 dark:text-white">Create post</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderPostCreate;
