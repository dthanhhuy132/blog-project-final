import classNames from "classnames";
import React from "react";

type Props = {
  normalView?: boolean;
  titleSmaller?: boolean;
  titlePostSize?: number;
  title?: string;
};

const PostItemTitle = ({
  normalView = false,
  titleSmaller = false,
  title,
}: Props) => {
  const classes = classNames("text-left line-clamp-2 mb-2", {
    "text-white text-[1.3rem] md:text-[1.7rem] font-bold": !normalView,
    "text-black text-[1.1rem] md:text-[1.1rem] font-semibold": normalView,
    "text-white text-[1.2rem] md:!text-[1.4rem] font-semibold": titleSmaller,
  });

  return (
    <h6 className={`${classes} dark:text-gray-300 line-clamp-2 pr-2`}>
      {title}
    </h6>
  );
};

export default PostItemTitle;
