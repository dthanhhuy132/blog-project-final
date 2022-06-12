import React from "react";

import noImg from "../../assets/img/NoImage.jpg";

type Props = {
  imageHeight?: number;
  imgSource?: string;
  normalView?: boolean;
};

const PostItemImg = ({ imageHeight = 0, imgSource, normalView }: Props) => {
  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden">
      <img
        src={imgSource || noImg}
        alt="PostImg-Hero"
        className={`object-cover w-full ${
          normalView && "brightness-[85%] dark:brightness-75"
        }`}
        style={{
          height: `${imageHeight ? imageHeight + "px" : "100%"}`,
        }}
      />
      {!normalView && (
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[#000000e0] to-[#0000] z-1"></div>
      )}
    </div>
  );
};

export default PostItemImg;
