import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckUserExist from "../common/CheckUserExist";
import Modal from "../common/Modal";
import { Post } from "../interface";
import { User } from "../interface/user";

type Props = {
  postDetail?: Post;
  allUser: User[];
};

const PostDetailAction = ({ postDetail, allUser }: Props) => {
  const navigate = useNavigate();
  const postAuthorId = postDetail?.userId;
  const { currentUser } = CheckUserExist();
  const isPostOwner = postAuthorId === currentUser?.id;

  const [isShowModal, setIsShowModal] = useState({
    modalEdit: false,
    modalDelete: false,
  });

  return (
    <div className="flex flex-col gap-2 items-center md:flex-row md:gap-10 py-2 mt-5 border-t-[1px]  border-b-[1px] border-gray-300">
      <div className="flex gap-5 items-center">
        <p>
          <span className="font-bold mr-1 dark:text-gray-300">
            {postDetail?.love}
          </span>
          <i className="fa-solid fa-heart mr-1 text-red-500" />
        </p>
        <p className="w-[7px] h-[7px] rounded-full bg-violet-900 dark:bg-green-500"></p>
        <p>
          <span className="font-bold mr-1 dark:text-gray-300">
            {postDetail?.comment}
          </span>
          <i className="fa-solid fa-message mr-1 text-blue-600" />
        </p>
      </div>

      <div className="flex items-center gap-10 md:ml-auto text-[0.8rem]">
        <div className="flex items-center gap-2">
          <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-600 hover:text-gray-200">
            <i className="fa-solid fa-heart mr-1 text-gray-400 " />
            Love
          </p>

          {!isPostOwner && (
            <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-600 hover:text-gray-200">
              <i className="fa-solid fa-flag mr-1 text-gray-400" />
              Report
            </p>
          )}

          <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-600 hover:text-gray-200">
            <i className="fa-solid fa-share-from-square text-gray-400 mr-1" />
            Share
          </p>
        </div>

        {isPostOwner && (
          <div className="flex items-center gap-2">
            <p
              className="px-2 py-1 rounded-md cursor-pointer bg-green-600 hover:bg-green-700 text-white"
              onClick={() =>
                setIsShowModal({ ...isShowModal, modalEdit: true })
              }
            >
              <i className="fa-solid fa-pen-to-square mr-1 " />
              Edit
            </p>
            <p
              className="px-2 py-1 rounded-md cursor-pointer bg-red-500 hover:bg-red-700 text-white"
              onClick={() =>
                setIsShowModal({ ...isShowModal, modalDelete: true })
              }
            >
              <i className="fa-solid fa-trash mr-1" />
              Delete
            </p>
            {isShowModal.modalEdit && (
              <Modal
                title="Edit post?"
                cancelFunc={() =>
                  setIsShowModal({ ...isShowModal, modalEdit: false })
                }
                okFunc={() =>
                  navigate(`/edit-post/${postDetail?.slug}`, {
                    state: postDetail,
                  })
                }
              ></Modal>
            )}
            {isShowModal.modalDelete && (
              <Modal
                title="Delete post"
                cancelFunc={() =>
                  setIsShowModal({ ...isShowModal, modalDelete: false })
                }
              ></Modal>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetailAction;
