import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  normalView?: boolean;
  noAuthor?: boolean;
};

const PostItemAuthorAndTime = ({
  normalView = false,
  noAuthor = false,
}: Props) => {
  return (
    <Link
      to="/userne"
      className={`flex items-center w-full group ${
        normalView ? "text-black text-[0.8rem]" : "text-white text-[0.8rem]"
      } dark:text-gray-300`}
    >
      {!noAuthor && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCEF_8YGMWFQ2FuuZT05vmAU_-HN_6q1WTID4s47rav2SV1VO4a3Bsi5AQwq5oKwIpfQ&usqp=CAU"
          alt=""
          className="w-[30px] h-[30px] object-cover rounded-full border-[2px] border-violet-500 group-hover:border-blue-500 "
        />
      )}
      <div className="w-full">
        {!noAuthor && (
          <>
            <span className="ml-2 group-hover:text-blue-400">Tên gì đây</span>
            <span className=" inline-block mx-3">|</span>
          </>
        )}
        <span className="">
          <i className="fa-solid fa-clock mr-1 text-gray-400"></i>22/2/2022
        </span>
      </div>
    </Link>
  );
};

export default PostItemAuthorAndTime;
