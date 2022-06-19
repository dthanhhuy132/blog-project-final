import "./post-detail.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDetailPost, resetPostDetail } from "../../store/posts/action";
import SectionTitle from "../common/SectionTitle";
import { iCategory, Post } from "../interface";
import PostItem from "../PostItem";
import PostItemAuthorAndTime from "../PostItem/PostItemAuthorAndTime";
import CommentAvatar from "./CommentAvatar";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

import FormatPostDetail from "./FormatPostDetail";
import PostDeatilAction from "./PostDetailAction";
import PostDetailTitle from "./PostDetailTitle";
import SkeletonPostDetail from "../Skeleton/SketetonPostDetail";
import getCategoryName from "../common/getCategoryName";

type Props = {};

const PostDetail = (props: Props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const pathname = location.pathname;
  let slug = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);

  const postDetail: Post = useSelector((state: any) => state.Posts.postDetail);
  const allCategory: iCategory[] = useSelector((state: any) => state.Category);

  let postCategorylist = getCategoryName(postDetail?.category, allCategory);
  console.log("postCategorylist", postCategorylist);

  useEffect(() => {
    dispatch(getDetailPost(slug));
  }, [slug]);

  useEffect(() => {
    FormatPostDetail();
  }, [postDetail]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => dispatch(resetPostDetail());
  }, []);

  return (
    <div className="flex px-2 lg:px-0 gap-10">
      <>
        {postDetail && allCategory ? (
          <>
            <div className="w-3/4 h-full rounded-br-xl rounded-bl-xl overflow-hidden">
              <PostDetailTitle postDetail={postDetail} />
              <p className="text-center md:text-justify mt-5 font-semibold text-[1rem] italic dark:text-gray-300">
                <q>{postDetail?.summary}</q>
              </p>
              <div
                className="dark:text-gray-300 mt-4 text-[0.9rem] text-left dth-dangerous-html"
                dangerouslySetInnerHTML={{ __html: `${postDetail?.content}` }}
              />
              <PostDeatilAction />
              {/* Comment section */}
              <CommentForm postDetail={postDetail} />
              <CommentItem commentParent={true} />
              <CommentItem />
            </div>

            <div className="flex flex-col gap-10 w-1/4">
              <div>
                <SectionTitle top={3} className="!mb-3">
                  Category
                </SectionTitle>
                <div className="flex gap-1 flex-wrap flex-stretch">
                  {postCategorylist.map((cate) => (
                    <Link
                      className="dark:text-gray-300 border-[1px] px-2 rounded-md cursor-pointer hover:bg-slate-600 min-w-[49%] inline-block"
                      to={`/category/${cate.slug}`}
                    >
                      {cate.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <SectionTitle top={5}>Related Posts</SectionTitle>
                <div className="flex flex-col gap-4">
                  <PostItem titleSmaller />
                  <PostItem titleSmaller />
                  <PostItem titleSmaller />
                  <PostItem titleSmaller />
                  <PostItem titleSmaller />
                </div>
              </div>

              {/* Category */}
            </div>
          </>
        ) : (
          <SkeletonPostDetail />
        )}
      </>
    </div>
  );
};

export default PostDetail;
