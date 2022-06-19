import React from "react";
import { Post } from "../interface";
import PostDetailCommonInfo from "./PostDetailCommonInfo";

import noImg from "../../assets/img/no-img-rectangle.png";

type Props = {
  postDetail: Post;
};

const PostDetailTitle = ({ postDetail }: Props) => {
  return (
    <div className="relative w-full h-full rounded-br-2xl rounded-bl-2xl  overflow-hidden">
      <img
        src={postDetail?.imageHeroBase64 || postDetail?.imageHeroLink || noImg}
        alt="heroImage"
        className="w-full max-h-[70vh] object-cover brightness-75 "
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[#000000cc] to-[#0000] z-1"></div>

      <PostDetailCommonInfo post={postDetail} />
    </div>
  );
};

export default PostDetailTitle;
