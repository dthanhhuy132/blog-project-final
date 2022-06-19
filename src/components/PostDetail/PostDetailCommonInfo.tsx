import React from "react";
import { Post } from "../interface";

type Props = {
  post: Post;
};

const PostDetailCommonInfo = ({ post }: Props) => {
  return (
    <div className="absolute bottom-2 left-2 text-white text-left z-10">
      <p className="mb-3 text-[1.5rem] font-semibold lead-[1] line-clamp-3">
        {post?.title}
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
