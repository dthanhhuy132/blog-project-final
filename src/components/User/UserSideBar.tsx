import { useSelector } from "react-redux";

import SectionTitle from "../common/SectionTitle";
import FastPost from "../PostFast";
import PostItem from "../PostItem";

type Props = {};

const UserSideBar = (props: Props) => {
  const fastPosts = useSelector((state: any) => state.Posts.fastPosts);
  const { data, pagination } = fastPosts;

  return (
    <div className="md:w-2/5">
      <FastPost smallSize data={data} />

      <div>
        <SectionTitle>Top Yêu thích</SectionTitle>
        <div className="flex flex-col gap-4 md:border-l-[2px] border-gray-400">
          <div className="flex justify-between gap-1 items-starts">
            <span className="font-bold text-gray-500 text-[2rem] leading-[80%] inline-block w-[60px]">
              #1
            </span>
            <PostItem normalView smallImage noAuthor showDetail />
          </div>

          <div className="flex justify-between gap-1 items-starts">
            <span className="font-bold text-gray-500 text-[2rem] leading-[80%] inline-block w-[60px]">
              #2
            </span>
            <PostItem normalView smallImage noAuthor showDetail />
          </div>

          <div className="flex justify-between gap-1 items-starts">
            <span className="font-bold text-gray-500 text-[2rem] leading-[80%] inline-block w-[60px]">
              #3
            </span>
            <PostItem normalView smallImage noAuthor showDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;
