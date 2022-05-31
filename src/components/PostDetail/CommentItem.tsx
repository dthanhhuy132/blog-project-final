import React from "react";
import { Link } from "react-router-dom";
import CommentAvatar from "./CommentAvatar";

type Props = {
  commentParent?: boolean;
  thirdCmt?: boolean;
};

const CommentItem = ({ commentParent = false, thirdCmt = false }: Props) => {
  return (
    <div className={`mt-4 flex gap-2`}>
      <CommentAvatar />
      <div>
        <div className="bg-slate-200 w-full rounded-md border-[1px] border-gray-300 text-left pl-2">
          <div className="flex items-center border-b-[1px] border-gray-400 mr-2 pb-1 mt-1">
            <div>
              <Link
                to="/user"
                className="text-[0.9rem] text-blue-600 font-semibold"
              >
                User name
              </Link>

              <span className="ml-3 text-[0.7rem]">10 minutes ago</span>
            </div>

            <div className="flex items-center ml-auto gap-3 text-[0.7rem]">
              <span className="cursor-pointer">
                <i className="fa-solid fa-reply " /> Reply
              </span>

              <span className="cursor-pointer">
                <i className="fa-solid fa-flag"></i> Report
              </span>
            </div>
          </div>

          <div className="mb-2">
            <p className="text-[0.7rem] py-2 pr-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              veniam eos molestias incidunt totam exercitationem, qui nobis
              officiis praesentium dolor suscipit porro. Modi esse voluptatum
              voluptatibus reiciendis dicta explicabo recusandae.
            </p>

            {/* Comment with image start */}
            <img
              src="https://images.headlines.pw/topnews-2017/imgs/28/24/2824bc2265c6c016e3fa0f000bbde0cd14f49361.jpg"
              alt=""
              className=" h-[150px] object-cover rounded-md"
            />
            {/* Comment with image end */}
          </div>
        </div>

        {commentParent && <CommentItem />}
      </div>
    </div>
  );
};

export default CommentItem;
