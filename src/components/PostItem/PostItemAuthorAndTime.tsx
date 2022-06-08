import classNames from "classnames";
import React from "react";

type Props = {
  normalView?: boolean;
  noAuthor?: boolean;
};

const PostItemAuthorAndTime = ({
  normalView = false,
  noAuthor = false,
}: Props) => {
  return (
    <div
      className={`flex items-center w-full ${
        normalView ? "text-black text-[0.8rem]" : "text-white text-[0.8rem]"
      } dark:text-gray-300`}
    >
      {!noAuthor && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCEF_8YGMWFQ2FuuZT05vmAU_-HN_6q1WTID4s47rav2SV1VO4a3Bsi5AQwq5oKwIpfQ&usqp=CAU"
          alt=""
          className="w-[30px] h-[30px] object-cover rounded-full border-[2px] border-violet-500 "
        />
      )}
      <div className="w-full">
        {!noAuthor && (
          <>
            <span className=" ml-2">
              <i className="fa-solid fa-user text-gray-400"></i> Tên gì đây
            </span>
            <span className=" inline-block mx-3">|</span>
          </>
        )}
        <span className="">
          <i className="fa-solid fa-clock mr-1 text-gray-400"></i>22/2/2022
        </span>
      </div>
    </div>
  );
};

export default PostItemAuthorAndTime;
