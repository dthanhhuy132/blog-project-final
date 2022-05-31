import React from "react";
import SectionTitle from "../common/SectionTitle";
import PostItem from "../PostItem";
import Button from "../common/Button";

type Props = {};

const PopularPost = (props: Props) => {
  return (
    <div className="mt-5 w-full">
      <SectionTitle>Popular Posts</SectionTitle>
      <div className="flex flex-wrap gap-4 w-full md:flex-nowrap items-stretch ">
        <div className="w-full md:w-1/2 ">
          <PostItem />
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <PostItem normalView showDetail />
          <PostItem normalView showDetail />
          <PostItem normalView showDetail />
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
