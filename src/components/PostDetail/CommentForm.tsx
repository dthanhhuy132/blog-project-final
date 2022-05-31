import React, { useEffect } from "react";
import CommentAvatar from "./CommentAvatar";

type Props = {};

const CommentForm = (props: Props) => {
  function handleInputCmt(e: any) {
    // let limit = 50; //height limit
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <div className="flex gap-2 mt-5 w-full ">
      <CommentAvatar />

      <div className="w-full border-[1px] border-gray-300 bg-slate-200 rounded-md overflow-hidden">
        <textarea
          name=""
          id=""
          rows={2}
          onInput={(e) => handleInputCmt(e)}
          placeholder="Let's write your comment..."
          className="w-full focus:outline-none p-2 font-thin text-[0.9rem] resize-none overflow-y-hidden bg-transparent"
        ></textarea>

        {/* Comment with image start */}
        <div className=" px-2 text-left">
          <div className="relative inline-block ">
            <img
              src="https://images.headlines.pw/topnews-2017/imgs/28/24/2824bc2265c6c016e3fa0f000bbde0cd14f49361.jpg"
              alt=""
              className=" h-[150px] object-cover rounded-md"
            />
            <i className="fa-solid fa-xmark absolute top-0 right-[-22px] px-2 py-1 rounded-md text-[1rem] text-white cursor-pointer shadow-red-500 bg-[rgba(0,0,0,0.5)]"></i>
          </div>
        </div>
        {/* Comment with image end */}

        <div className="text-right px-2 py-2 flex justify-end items-center gap-2">
          <img
            src="https://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Apps-Windows8-Photos-icon.png"
            alt=""
            className="w-[37px] h-[37px]"
          />
          <input type="file" hidden />

          <button className="bg-blue-600 px-2 py-1 text-white rounded-md">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
