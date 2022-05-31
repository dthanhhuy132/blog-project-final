import React from "react";

type Props = {};

const CommentAvatar = (props: Props) => {
  return (
    <img
      src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
      alt=""
      className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] object-cover rounded-full border-blue-500 border-2"
    />
  );
};

export default CommentAvatar;
