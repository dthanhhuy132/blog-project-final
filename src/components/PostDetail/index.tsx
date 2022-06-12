import "./post-detail.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getDetailPost } from "../../store/posts/action";
import SectionTitle from "../common/SectionTitle";
import { Post } from "../interface";
import PostItem from "../PostItem";
import PostItemAuthorAndTime from "../PostItem/PostItemAuthorAndTime";
import CommentAvatar from "./CommentAvatar";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

import FormatPostDetail from "./FormatPostDetail";
import PostDeatilAction from "./PostDetailAction";
import PostDetailTitle from "./PostDetailTitle";

type Props = {};

const PostDetail = (props: Props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const pathname = location.pathname;
  let slug = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);

  const postDetail: Post = useSelector((state: any) => state.Posts.postDetail);

  console.log(slug);
  useEffect(() => {
    dispatch(getDetailPost(slug));
  }, [slug]);

  useEffect(() => {
    FormatPostDetail();
  }, [postDetail]);

  return (
    <div className="flex px-2 lg:px-0 gap-10">
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
        <CommentItem />
        <CommentItem commentParent={true} />
      </div>

      <div className="flex flex-col gap-10 w-1/4">
        {/* related post */}

        <div>
          <SectionTitle top={3}>Category</SectionTitle>
          <div className="flex flex-col gap-4"></div>
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
    </div>
  );
};

export default PostDetail;
