import React from "react";

type Props = {
  lineClamp: number;
  summary: string | undefined;
};

const PostItemDetail = ({ lineClamp = 2, summary }: Props) => {
  return (
    <div
      className={`text-[0.8rem] w-full mb-1 text-gray-400 line-clamp-${lineClamp} pr-2`}
    >
      {summary}
    </div>
  );
};

export default PostItemDetail;
