import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import PostItem from "../PostItem";
import PostItemAuthorAndTime from "../PostItem/PostItemAuthorAndTime";
import CommentAvatar from "./CommentAvatar";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import PostDetailCommonInfo from "./PostDetailCommonInfo";

type Props = {};

const PostDetail = (props: Props) => {
  return (
    <div className="flex px-2 lg:px-0 gap-10">
      <div className="w-2/3 h-full">
        {/* Hero image - title, author, like, comment */}
        <div className="relative w-full h-full">
          <img
            src="https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg"
            alt="heroImage"
            className="w-full h-full brightness-75 rounded-br-xl rounded-bl-xl"
          />

          <PostDetailCommonInfo />
        </div>
        <p className="text-center md:text-justify mt-5 font-semibold text-[0.9rem] italic dark:text-gray-400">
          <q>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quo
            voluptas, iure veritatis architecto illo quam dignissimos! Itaque
            eius voluptates ea perspiciatis cumque eveniet, excepturi incidunt
            blanditiis necessitatibus, aspernatur at.Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </q>
        </p>
        {/* Content */}

        {/* Action section start */}
        <div className="flex flex-col gap-2 items-center md:flex-row md:gap-10 py-2 mt-5 border-t-[1px]  border-b-[1px] border-gray-300">
          <div className="flex gap-5 items-center">
            <p>
              <span className="font-bold mr-1 dark:text-gray-300">14</span>
              <i className="fa-solid fa-heart mr-1 text-red-500" />
            </p>
            <p className="w-[7px] h-[7px] rounded-full bg-violet-900 dark:bg-green-500"></p>
            <p>
              <span className="font-bold mr-1 dark:text-gray-300">10</span>
              <i className="fa-solid fa-message mr-1 text-blue-600" />
            </p>
          </div>
          <div className="flex items-center gap-3 md:ml-auto text-[0.8rem]">
            <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer">
              <i className="fa-solid fa-heart mr-1 text-gray-400" />
              Love
            </p>

            <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer">
              <i className="fa-solid fa-flag mr-1 text-gray-400" />
              Report
            </p>

            <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer">
              <i className="fa-solid fa-share-from-square text-gray-600 mr-1" />
              Share
            </p>
          </div>
        </div>
        {/* Action section end */}

        {/* Comment section */}
        <CommentForm />
        <CommentItem commentParent={true} />
        <CommentItem />
        <CommentItem />
        <CommentItem commentParent={true} />
      </div>

      <div className="flex flex-col gap-10 w-1/3">
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
