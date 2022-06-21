import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Pagination, Post } from "../interface";
import InfiniteScroll from "react-infinite-scroll-component";
import PostItem from "../PostItem";
import SkeletonPostItem from "../Skeleton/SkeletonPostItem";
import { useDispatch, useSelector } from "react-redux";
import { getLastestPosts } from "../../store/posts/action";

type Props = {};

const LatestPost = (props: Props) => {
  const lastestPosts = useSelector((state: any) => state.Posts.lastestPosts);
  const { data, pagination } = lastestPosts;
  const { _page, _limit, _totalRows } = pagination;

  const dispatch = useDispatch();

  function getMorePost() {
    dispatch(getLastestPosts({ _page: _page + 1 }));
  }

  return (
    <div className="mt-5 mb-10">
      <SectionTitle link="/popular-posts">Latest Posts</SectionTitle>
      {data.top3.length > 0 ? (
        <div className="flex gap-3 flex-col">
          <div className="flex flex-col md:flex-row gap-6 ">
            {data.top3.map((item: Post, index: number) => (
              <PostItem
                titleSmaller
                imageHeight={400}
                data={item}
                key={index}
              />
            ))}
          </div>

          <div className="gap-6 mt-4">
            <InfiniteScroll
              next={getMorePost}
              style={{ overflow: "unset" }}
              hasMore={_page * _limit <= _totalRows}
              dataLength={_page * 10}
              loader={
                <div className="absolute top-full left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {Array.from(Array(6)).map((v, i) => (
                    <SkeletonPostItem normalView showDetail key={i} />
                  ))}
                </div>
              }
              endMessage={
                <h4 className="absolute bottom-[-40px] dark:text-gray-100 font-bold left-[50%] translate-x-[-50%]">
                  END
                </h4>
              }
              className="relative grid grid-cols-1 md:grid-cols-2 gap-5"
              // scrollableTarget="scrollableDiv"
            >
              {data.restPosts.map((item: Post, index: number) => (
                <PostItem normalView showDetail data={item} key={index} />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-6 ">
            {Array.from(Array(2)).map((v, i) => (
              <SkeletonPostItem imageHeight={300} key={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {Array.from(Array(4)).map((v, i) => (
              <SkeletonPostItem normalView showDetail key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LatestPost;
