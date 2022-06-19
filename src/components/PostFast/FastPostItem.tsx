import classNames from "classnames";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FastPost } from "../interface";
import { User } from "../interface/user";

type Props = {
  noPadding?: boolean;
  smallSize?: boolean;
  fastPost?: FastPost;
  active?: boolean;
  postIndex?: number;
  nextFn?: any;
  previousFn?: any;
};

const FastPostItem = ({
  noPadding = false,
  smallSize = false,
  active = false,
  fastPost,
  nextFn = () => {},
  previousFn = () => {},
}: Props) => {
  const navigate = useNavigate();
  const users = useSelector((state: any) => state.User.allUser);
  const sizeClass = classNames({
    "md:w-[170px] md:h-[220px] ": !smallSize,
    "md:w-[130px] md:h-[200px] ": smallSize,
  });

  const userId = fastPost?.userId;
  const userInfo: User =
    users[users.findIndex((user: any) => user.id === userId)];

  function handleClickOnUserName(e: any) {
    e.stopPropagation();
    navigate(`/${userInfo.username}`);
  }

  return (
    <div
      className={`relative w-[130px] h-[200px] transition-all duration-200 select-none
      ${sizeClass} rounded-xl inline-block cursor-pointer mr-2 
      ${active && "!w-[60vh] !h-[80vh] !mx-10"}
      ${!noPadding && "last:mr-0"}
      ${noPadding && "mr-0"}
      ${`get-post-${active ? "active" : ""}`}
      `}
      onClick={() => {
        navigate(`/fastpost/${fastPost?.id}`);
      }}
    >
      {active && (
        <div className="text-gray-400 dark:text-gray-600  text-[2rem] cursor-default">
          <i
            className="fa-solid fa-angle-right absolute top-[50%] right-0 translate-x-[150%] translate-y-[-50%]"
            onClick={nextFn}
          ></i>
          <i
            className="fa-solid fa-angle-left absolute top-[50%] left-0 translate-x-[-150%] translate-y-[-50%]"
            onClick={previousFn}
          ></i>
        </div>
      )}

      {/* hero image */}
      {userInfo && (
        <>
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={fastPost?.imageBase64 || fastPost?.imageLink}
              alt="bg"
              className={`w-full h-full object-cover dark:brightness-80 brightness-95 ${
                !active && "hover:scale-110"
              } transition-all duration-300`}
            />
          </div>

          {/* avatar image */}
          <div
            className={`flex items-center group`}
            onClick={(e) => handleClickOnUserName(e)}
          >
            <img
              src={userInfo.avatarBase64 || userInfo.avatartLink}
              alt=""
              className={`object-cover rounded-full border-[2px] border-violet-500 absolute top-2 left-2 md:top-2 md:left-2 group-hover:border-blue-500
            ${smallSize ? "w-[35px] h-[35px]" : "w-[42px] h-[42px]"}
            ${active && "!w-[50px] h-[50px]"}
            `}
            />
            <p
              className={`text-white ml-2 absolute text-[0.9rem] bottom-2 md:bottom-[unset] left-1 group-hover:text-blue-400
            ${smallSize ? "" : "md:top-5 md:left-12"}
            ${active && "md:left-14 md:top-6"}
            `}
            >
              {userInfo.userFirstName} {userInfo.userLastName}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FastPostItem;
