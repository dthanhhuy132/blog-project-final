import React from "react";

type Props = {};

const HeaderUserLogedin = (props: Props) => {
  return (
    <div className="flex items-center ml-3 cursor-pointer lg:gap-2">
      <i className="fa-solid fa-bell text-gray-500 cursor-pointer hover:text-gray-900 mr-1 md:mr-2 lg:mr-3 text-[1.3rem]"></i>

      <div className="flex items-center gap-2 ml-3 text-[1.1rem] rounded-lg bg-gray-300 px-2 md:px-3 py-1 cursor-pointer ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCEF_8YGMWFQ2FuuZT05vmAU_-HN_6q1WTID4s47rav2SV1VO4a3Bsi5AQwq5oKwIpfQ&usqp=CAU"
          alt=""
          className="w-[35px] h-[35px] object-cover rounded-full border-[2px] border-violet-500"
        />
        <p className="px-[3px] md:px-2 capitalize">name</p>
        <i className="fa-solid fa-bars hidden md:inline-block"></i>
      </div>
    </div>
  );
};

export default HeaderUserLogedin;
