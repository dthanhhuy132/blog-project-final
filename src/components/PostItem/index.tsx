import React from "react";
import PostItemAuthorAndTime from "./PostItemAuthorAndTime";
import PostItemDetail from "./PostItemDetail";
import PostItemImg from "./PostItemImg";
import PostItemTitle from "./PostItemTitle";

type Props = {
  normalView?: boolean;
  showDetail?: boolean;
  titleSmaller?: boolean;
  smallImage?: boolean;
  noAuthor?: boolean;
  lineClamp?: number;
  height?:number,
  titlePostSize?: number,
  imageHeight?:number
};

const PostItem = ({
  normalView = false,
  showDetail = false,
  titleSmaller = false,
  smallImage = false,
  noAuthor = false,
  lineClamp = 2,
  titlePostSize = 1,
  imageHeight = 0
}: Props) => {
  return (
    <div
      className={`w-full h-full relative rounded-lg hover:shadow-[0px_0px_10px_#555] transition-all duration-300 flex
      
      ${normalView && "flex gap-2 shadow-[0px_0px_4px_#888]"}

      `}
    >
      <div className={`${normalView && "w-1/3"} w-full`}>
        <PostItemImg imageHeight={imageHeight}/>
      </div>
      <div
        className={`text-left w-full flex flex-col justify-center py-2 ${
          normalView ? "w-2/3" : "absolute bottom-2 left-2"
        }`}
      >
        <PostItemTitle normalView={normalView} titleSmaller={titleSmaller} titlePostSize={titlePostSize}/>
        {showDetail && <PostItemDetail lineClamp={lineClamp} />}
        <PostItemAuthorAndTime noAuthor={noAuthor} normalView={normalView} />
      </div>
    </div>
  );
};

export default PostItem;
