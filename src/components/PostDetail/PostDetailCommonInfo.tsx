import React from "react";
import { Post } from "../interface";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector } from "react-redux";
import UserProfile from "../User";
import { User } from "../interface/user";
dayjs.extend(relativeTime);

type Props = {
  post: Post;
};

const PostDetailCommonInfo = ({ post }: Props) => {
  const allUser = useSelector((state: any) => state.User.allUser);
  const userId = post.userId;

  const postUserIndex = allUser.findIndex((item: User) => item.id === userId);
  const postUser: User = allUser[postUserIndex];

  return (
    <div className="absolute bottom-2 left-2 text-white text-left z-10">
      <p className="mb-3 text-[1.5rem] font-semibold lead-[1] line-clamp-3">
        {post?.title}
      </p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 group cursor-pointer">
          <img
            src={postUser?.avatarBase64 || postUser?.avatartLink}
            alt=""
            className="w-[40px] h-[40px] object-cover rounded-full border-2 group-hover:border-blue-400 "
          />
          <p className="mr-5 group-hover:text-blue-400">
            {postUser?.userFirstName} {postUser?.userLastName}
          </p>
        </div>
        <p>
          <i className="fa-solid fa-clock mr-1 text-gray-400" />
          <>{dayjs().to(dayjs(post?.createdAt))}</>
        </p>
        <p>
          <i className="fa-solid fa-heart mr-1 text-red-500" />
          {post?.love}
        </p>
        <p>
          <i className="fa-solid fa-message mr-1 text-blue-600" />
          {post?.comment}
        </p>
      </div>
    </div>
  );
};

export default PostDetailCommonInfo;
