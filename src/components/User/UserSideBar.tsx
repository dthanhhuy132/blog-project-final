import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SectionTitle from "../common/SectionTitle";
import { FastPost as iFastPost, Pagination, Post } from "../interface";
import { User } from "../interface/user";
import FastPost from "../PostFast";
import PostItem from "../PostItem";

type Props = {
  popularPosts: {
    data: Post[];
    pagination: Pagination;
  };
  fastPosts: {
    data: iFastPost[];
    pagination: Pagination;
  };
};

const UserSideBar = ({ popularPosts, fastPosts }: Props) => {
  const { data: fastPostData, pagination: paginFastPost } = fastPosts;
  const { data: popularData, pagination: paginPopular } = popularPosts;
  const top3Popular = popularData.slice(0, 3);

  const param = useParams();
  const username = param.userPage;

  return (
    <div className="md:w-2/5">
      {fastPostData.length > 0 && (
        <FastPost
          smallSize
          data={fastPostData}
          pagination={paginFastPost}
          linkToUserFastPost={username}
        />
      )}

      {top3Popular.length > 0 && (
        <div>
          <SectionTitle>Top Yêu thích</SectionTitle>
          <div className="flex flex-col gap-4 md:border-l-[2px] border-gray-400">
            {top3Popular.map((item: Post, index: number) => (
              <div
                className="flex justify-between gap-1 items-starts"
                key={index}
              >
                <span className="font-bold text-gray-500 text-[2rem] leading-[80%] inline-block w-[60px]">
                  #{index + 1}
                </span>
                <PostItem
                  normalView
                  smallImage
                  // noAuthor
                  showDetail
                  data={item}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSideBar;
