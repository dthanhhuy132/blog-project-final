import classNames from "classnames";
import React from "react";
import { FastPost } from "../interface";

type Props = {
  noPadding?: boolean;
  smallSize?: boolean;
  fastPost?: FastPost;
};

const FastPostItem = ({
  noPadding = false,
  smallSize = false,
  fastPost,
}: Props) => {
  const sizeClass = classNames({
    "md:w-[170px] md:h-[220px] ": !smallSize,
    "md:w-[130px] md:h-[200px] ": smallSize,
  });

  return (
    <div
      className={`relative w-[130px] h-[200px] ${sizeClass} rounded-xl overflow-hidden inline-block cursor-pointer mr-2 
      ${!noPadding && "last:mr-0"}
      ${noPadding && "mr-0"}
      `}
    >
      {/* hero image */}
      <img
        src={fastPost?.imageBase64 || fastPost?.imageLink}
        alt="bg"
        className="w-full h-full object-cover brightness-75 hover:scale-110 transition-all duration-300"
      />

      {/* avatar image */}
      <div className={`flex items-center`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCEF_8YGMWFQ2FuuZT05vmAU_-HN_6q1WTID4s47rav2SV1VO4a3Bsi5AQwq5oKwIpfQ&usqp=CAU"
          alt=""
          className={`object-cover rounded-full border-[2px] border-violet-500 absolute top-2 left-2 md:top-2 md:left-2
          ${smallSize ? "w-[35px] h-[35px]" : "w-[42px] h-[42px]"}
          `}
        />
        <p
          className={`text-white ml-2 absolute text-[0.9rem] bottom-2 md:bottom-[unset] left-1 ${
            smallSize ? "" : "md:top-5 md:left-12"
          }`}
        >
          Tên gì đây
        </p>
      </div>
    </div>
  );
};

export default FastPostItem;
