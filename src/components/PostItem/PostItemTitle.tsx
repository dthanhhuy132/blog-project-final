import classNames from "classnames";
import React from "react";

type Props = {
  normalView?: boolean;
  titleSmaller?: boolean;
  titlePostSize?: number;
};

const PostItemTitle = ({ normalView = false, titleSmaller = false }: Props) => {
  const classes = classNames("text-left line-clamp-2", {
    "text-white text-[1.5rem] md:text-[1.8rem] font-bold": !normalView,
    "text-black text-[1.1rem] md:text-[1.1rem] font-semibold": normalView,
    "text-white text-[1rem] md:text-[1.4rem] font-semibold": titleSmaller,
  });

  return <h6 className={`${classes} dark:text-gray-300 `}>Tiêu đề bài viết</h6>;
};

export default PostItemTitle;
