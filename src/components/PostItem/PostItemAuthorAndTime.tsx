import classNames from "classnames";
import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { idText } from "typescript";
import { User } from "../interface/user";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type Props = {
  normalView?: boolean;
  noAuthor?: boolean;
  authorInfo: User;
  createdAt: number | undefined;
};

const PostItemAuthorAndTime = ({
  normalView = false,
  noAuthor = false,
  authorInfo,
  createdAt,
}: Props) => {
  const navigate = useNavigate();

  function handleClickAuthor(e: any) {
    e.stopPropagation();
    navigate(`/${authorInfo?.username}`);
  }

  return (
    <div
      className={`flex items-center gap-7 w-full  ${
        normalView ? "text-black text-[0.8rem]" : "text-white text-[0.8rem]"
      } dark:text-gray-300`}
    >
      {!noAuthor && (
        <div
          className="group flex gap-1 items-center"
          onClick={(e: any) => handleClickAuthor(e)}
        >
          <img
            src={authorInfo?.coverBase64 || authorInfo?.avatartLink}
            alt=""
            className="w-[30px] h-[30px] object-cover rounded-full border-[2px] border-violet-500 group-hover:border-blue-500 "
          />

          <span className="group-hover:text-blue-400 whitespace-nowrap">
            {authorInfo?.userFirstName} {authorInfo?.userLastName}
          </span>
        </div>
      )}
      <div className="w-full ml-2">
        <i className="fa-solid fa-clock mr-1 text-gray-400"></i>
        {dayjs().to(dayjs(createdAt))}
      </div>
    </div>
  );
};

export default PostItemAuthorAndTime;
