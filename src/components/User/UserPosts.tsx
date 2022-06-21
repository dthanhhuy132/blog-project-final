import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Pagination, Post } from "../interface";
import PostItem from "../PostItem";

type Props = {
  lastestPosts: {
    data: Post[];
    pagination: Pagination;
  };
};

const UserPosts = ({ lastestPosts }: Props) => {
  const { data, pagination } = lastestPosts;

  const twoMainPosts = data.slice(0, 2);
  const resPosts = data.slice(2, data.length);
  return (
    <div className="w-full md:w-3/5">
      <SectionTitle>Tất cả bài viết</SectionTitle>

      <div className="flex flex-col gap-4">
        <div className="w-full flex gap-4 h-[280px]">
          {twoMainPosts.map((item: Post, i: number) => (
            <div className="w-1/2">
              <PostItem titleSmaller data={item} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {resPosts.map((item: Post, i: number) => (
            <div key={i}>
              <PostItem normalView showDetail lineClamp={3} data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
