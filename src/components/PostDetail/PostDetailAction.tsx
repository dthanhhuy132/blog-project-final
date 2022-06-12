import React from "react";
import { Post } from "../interface";

type Props = {
  postDetail?: Post;
};

const PostDetailAction = ({ postDetail }: Props) => {
  return (
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
        <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-700 hover:text-gray-200">
          <i className="fa-solid fa-heart mr-1 text-gray-400 " />
          Love
        </p>

        <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-700 hover:text-gray-200">
          <i className="fa-solid fa-flag mr-1 text-gray-400" />
          Report
        </p>

        <p className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-700 hover:text-gray-200">
          <i className="fa-solid fa-share-from-square text-gray-400 mr-1" />
          Share
        </p>
      </div>
    </div>
  );
};

export default PostDetailAction;
