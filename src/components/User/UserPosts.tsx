import React from "react";
import SectionTitle from "../common/SectionTitle";
import PostItem from "../PostItem";

type Props = {};

const UserPosts = (props: Props) => {
  return (
    <div className="w-full md:w-3/5">
      <SectionTitle>Tất cả bài viết</SectionTitle>

      <div className="flex flex-col gap-4">
        <div className="w-full flex gap-4 h-[280px]">
          <div className="w-1/2">
            <PostItem />
          </div>
          <div className="w-1/2">
            <PostItem />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <PostItem normalView showDetail lineClamp={3} />
          <PostItem normalView showDetail lineClamp={3} />
          <PostItem normalView showDetail lineClamp={3} />
          <PostItem normalView showDetail lineClamp={3} />
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
