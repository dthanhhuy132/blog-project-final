import React from "react";

type Props = {
  normalView?: boolean;
  smallImage?: boolean;
};

const PostItemImg = ({ normalView = false, smallImage = false }: Props) => {
  return (
    <img
      src="https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=2000"
      alt="PostImg-Heor"
      className="rounded-lg object-cover brightness-75 w-ful h-full"
    />
  );
};

export default PostItemImg;
