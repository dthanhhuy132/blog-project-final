import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Post } from "../interface";
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
  height?: number;
  titlePostSize?: number;
  imageHeight?: number;
  data?: Post;
};

const PostItem = ({
  normalView = false,
  showDetail = false,
  titleSmaller = false,
  noAuthor = false,
  lineClamp = 2,
  titlePostSize = 1,
  imageHeight = 0,
  data,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-full h-full relative rounded-lg hover:shadow-[0px_0px_10px_#555] transition-all duration-300 flex
      ${
        normalView && "flex gap-3"
      } shadow-[0px_0px_2px_#888] dark:hover:shadow-amber-300 cursor-pointer
      `}
      onClick={() => navigate(`/post/${data?.slug}`)}
    >
      <div
        className={`${
          normalView && "w-1/3"
        } w-full rounded-lg dark:shadow-[0px_0px_4px_#555]`}
      >
        <PostItemImg
          imageHeight={imageHeight}
          imgSource={data?.imageHeroBase64 || data?.imageHeroLink}
          normalView={normalView}
        />
      </div>
      <div
        className={`text-left w-full flex flex-col justify-center py-2 ${
          normalView ? "w-2/3" : "absolute bottom-2 left-2"
        }`}
      >
        <PostItemTitle
          normalView={normalView}
          titleSmaller={titleSmaller}
          titlePostSize={titlePostSize}
          title={data?.title}
        />
        {showDetail && (
          <PostItemDetail lineClamp={lineClamp} summary={data?.summary} />
        )}
        <PostItemAuthorAndTime noAuthor={noAuthor} normalView={normalView} />
      </div>
    </div>
  );
};

export default PostItem;
