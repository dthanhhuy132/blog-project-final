import React, { useEffect, useRef, useState } from "react";
import { Post } from "../interface";
import CommentAvatar from "./CommentAvatar";
import CommentFormModal from "./CommentFormModal";

type Props = {
  postDetail: Post;
};

const CommentForm = ({ postDetail }: Props) => {
  const [cmtForm, setCmtForm] = useState({
    id: "",
    commentParentId: "",
    postId: postDetail?.id,
    userId: "",
    content: "",
    imageBase64: "",
    imageLink: "",
    isReport: false,
    reportQuantity: 0,
  });
  const [modalShow, setModalShow] = useState(false);

  function handleSubmitComment() {}

  function handleInputCmt(e: any) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    setCmtForm({ ...cmtForm, content: e.target.value });
  }
  return (
    <div className="flex gap-2 mt-5 w-full ">
      <CommentAvatar />

      <div className="w-full border-[1px] border-gray-300 bg-slate-100 rounded-md overflow-hidden dark:bg-[#18191a] dark:border-gray-500">
        <textarea
          name=""
          id=""
          rows={2}
          onInput={(e) => handleInputCmt(e)}
          placeholder="Let's write your comment..."
          className="w-full focus:outline-none p-2 font-thin text-[0.9rem] resize-none overflow-y-hidden bg-transparent dark:text-gray-200"
        ></textarea>

        {/* Comment with image start */}
        <div className=" px-2 text-left">
          <div className="relative inline-block ">
            <img
              src="https://images.headlines.pw/topnews-2017/imgs/28/24/2824bc2265c6c016e3fa0f000bbde0cd14f49361.jpg"
              alt=""
              className=" h-[200px] object-cover rounded-md"
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
            onClick={() => {
              console.log("nhan vao hinh");
              setModalShow(true);
            }}
          />
          <button
            className="bg-blue-600 px-2 py-1 text-white rounded-md"
            onClick={handleSubmitComment}
          >
            Post
          </button>
        </div>
      </div>

      <CommentFormModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default CommentForm;
