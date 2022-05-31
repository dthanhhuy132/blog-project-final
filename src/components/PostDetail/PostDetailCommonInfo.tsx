import React from "react";

type Props = {};

const PostDetailCommonInfo = (props: Props) => {
  return (
    <div className="absolute bottom-2 left-2 text-white text-left">
      <p>
        <span className="text-[2rem] text-gray-400 font-bold inline-block w-[30px] text-center mr-4">
          #
        </span>
        <span className="text-[1.5rem] font-semibold">Post title</span>
      </p>

      <div className="flex items-center gap-4">
        <img
          src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt=""
          className="w-[30px] h-[30px] object-cover rounded-full"
        />
        <p className="mr-5">Name</p>
        <p>
          <i className="fa-solid fa-clock mr-1 text-gray-400" />
          22/2/2022
        </p>
        <p>
          <i className="fa-solid fa-heart mr-1 text-red-500" />
          14
        </p>
        <p>
          <i className="fa-solid fa-message mr-1 text-blue-600" />
          10
        </p>
      </div>
    </div>
  );
};

export default PostDetailCommonInfo;
