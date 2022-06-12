import React from "react";
import SectionTitle from "../common/SectionTitle";
import PostItem from "../PostItem";
import Button from "../common/Button";
import { Pagination, Post } from "../interface";
import SkelentonPostItem from "../Skeleton/SkelentonPostItem";

type Props = {
  data: {
    right: Post[];
    left: Post[];
  };
  pagination: Pagination;
};

const PopularPost = ({ data, pagination }: Props) => {
  return (
    <div className="mt-5 w-full">
      <SectionTitle link="/lastest-posts">Popular Posts</SectionTitle>
      {data.left.length > 0 ? (
        <div className="flex flex-wrap gap-6 w-full md:flex-nowrap items-stretch ">
          <div className="w-full md:w-1/2 ">
            <PostItem data={data.left[0]} />
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-5">
            {data.right.map((item, index) => (
              <PostItem normalView showDetail data={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-7 w-full md:flex-nowrap items-stretch ">
          <div className="w-full md:w-1/2 ">
            <SkelentonPostItem />
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-5">
            {Array.from(Array(3)).map((v, i) => (
              <SkelentonPostItem normalView showDetail key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularPost;
