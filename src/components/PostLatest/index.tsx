import React from "react";
import SectionTitle from "../common/SectionTitle";
import PostItem from "../PostItem";

type Props = {};

const LatestPost = (props: Props) => {
  return (
    <div className="mt-5">
      <SectionTitle>Latest Posts</SectionTitle>

      <div className="flex flex-col md:flex-row gap-4 ">
        <PostItem titleSmaller imageHeight={300}/>
        <PostItem titleSmaller imageHeight={300}/>
        <PostItem titleSmaller imageHeight={300}/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <PostItem normalView showDetail />
        <PostItem normalView showDetail />
        <PostItem normalView showDetail />
        <PostItem normalView showDetail />
      </div>
    </div>
  );
};

export default LatestPost;
