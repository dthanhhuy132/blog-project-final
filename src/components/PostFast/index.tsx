import React, { useEffect, useState } from "react";

import SectionTitle from "../common/SectionTitle";
import { FastPost, Pagination } from "../interface";
import FastPostItem from "./FastPostItem";

import SkeletonFastPost from "../Skeleton/SkeletonFastPost";
import { useDispatch, useSelector } from "react-redux";
import { getFastPosts } from "../../store/posts/action";
import Button from "../common/Button";
import { User } from "../interface/user";

type Props = {
  smallSize?: boolean;
  pagination: Pagination;
  data: FastPost[];
  linkToUserFastPost?: string;
};

const FastPostComponent = ({
  smallSize = false,
  pagination,
  data,
  linkToUserFastPost = "",
}: Props) => {
  const allFastPost = useSelector((state: any) => state.Posts.fastPosts);
  const dispatch = useDispatch();
  // console.log("allFastPost", allFastPost);
  const { _page, _limit, _totalRows } = pagination;

  const [isLoading, setIsLoading] = useState(false);

  function handleClickLoadMore() {
    if (pagination) console.log(_page);
    if (_page * _limit >= _totalRows) {
      return;
    } else {
      setIsLoading(true);
      dispatch(getFastPosts({ _page: _page + 1 })).then((res: any) =>
        setIsLoading(false)
      );
    }
  }

  return (
    <>
      <SectionTitle>Fast Posts</SectionTitle>
      <div className="w-full overflow-x-auto rounded-lg text-left flex items-center">
        {data.length > 0 ? (
          <>
            <div className="relative whitespace-nowrap">
              <>
                {data.map((fastPost: FastPost, index: number) => (
                  <FastPostItem
                    key={index}
                    fastPost={fastPost}
                    smallSize={smallSize}
                    linkToUserFastPost={linkToUserFastPost}
                  />
                ))}
                {isLoading && (
                  <>
                    {Array.from(Array(7)).map((v, i) => (
                      <SkeletonFastPost key={i} />
                    ))}
                  </>
                )}
              </>
            </div>
            {_page * _limit < _totalRows && (
              <button
                onClick={handleClickLoadMore}
                className="rounded-md text-white bg-blue-600 dark:text-white whitespace-nowrap mx-2 p-2 h-full border-[1px]"
              >
                Load More
              </button>
            )}
          </>
        ) : (
          <div className="overflow-x-hidden whitespace-nowrap">
            {Array.from(Array(7)).map((v, i) => (
              <SkeletonFastPost key={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FastPostComponent;
