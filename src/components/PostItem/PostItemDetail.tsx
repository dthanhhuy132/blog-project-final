import React from "react";

type Props = {
  lineClamp: number;
};

const PostItemDetail = ({ lineClamp = 2 }: Props) => {
  return (
    <div
      className={`text-[0.8rem] w-full mb-1 text-gray-500 line-clamp-${lineClamp} pr-2`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem
      pariatur nemo velit? Quibusdam, magnam! Odio rerum, dicta cupiditate amet
      voluptas ex alias expedita quis ducimus? Ratione saepe ea dolorum!
    </div>
  );
};

export default PostItemDetail;
