import React, { useEffect, useLayoutEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Stories from "react-insta-stories";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import postSlider from "../components/common/postSlider";
import { FastPost } from "../components/interface";
import FastPostComponent from "../components/PostFast";
import FastPostItem from "../components/PostFast/FastPostItem";
import SkeletonFastPost from "../components/Skeleton/SkeletonFastPost";
import { getFastPosts } from "../store/posts/action";

type Props = {};

const FastPostPage = (props: Props) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const fastPost = useSelector((state: any) => state.Posts.fastPosts);
  const { data, pagination } = fastPost;
  const { _page, _limit, _totalRows } = pagination;

  const [isLoadingPost, setIsLoadingPost] = useState(false);

  const fastPostId = location.pathname.slice(
    location.pathname.lastIndexOf("/") + 1,
    location.pathname.length
  );

  const currentPostIndex = data.findIndex(
    (post: FastPost) => post.id === fastPostId
  );

  function handleGetMoreFastPost() {
    if (_page * _limit >= _totalRows || isLoadingPost) return;
    if (currentPostIndex === data.length - 1) {
      setIsLoadingPost(true);
      dispatch(getFastPosts({ _page: _page + 1 })).then((res: any) =>
        setIsLoadingPost(false)
      );
    }
    return;
  }

  useEffect(() => {
    postSlider(false, handleGetMoreFastPost);
  }, [location.pathname]);

  useEffect(() => {
    postSlider(true, handleGetMoreFastPost);
  }, []);

  return (
    <>
      <Link to="/">
        <i className="fa-solid fa-xmark fixed top-5 left-5 px-4 py-3 bg-slate-400 dark:bg-slate-200 rounded-full text-[1.3rem] z-50 animate__animated animate__fadeInDown"></i>
      </Link>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#f0f1f3] dark:bg-black gap-2 h-full w-[100%] flex items-center !overflow-hidden fast-post-slider animate__animated animate__fadeIn">
        {data.length > 0 ? (
          <div className="relative whitespace-nowrap flex items-center fast-post-wrapper">
            {data.map((fastPost: FastPost, index: number) => (
              <>
                <FastPostItem
                  key={index}
                  fastPost={fastPost}
                  postIndex={index}
                  // nextFn={handleNextPost}
                  // previousFn={handlePreviousPost}
                  active={fastPostId === fastPost.id}
                />
              </>
            ))}

            {
              <>
                {_page * _limit >= _totalRows && (
                  <h2 className="dark:text-white">End...</h2>
                )}
              </>
            }
            {isLoadingPost && (
              <>
                {Array.from(Array(4)).map((v, i) => (
                  <SkeletonFastPost key={i} />
                ))}
              </>
            )}
          </div>
        ) : (
          <div className="overflow-x-hidden"></div>
        )}
      </div>
    </>
  );
};

export default FastPostPage;
