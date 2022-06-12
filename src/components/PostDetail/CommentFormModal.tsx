import InputFiled from "../PostCreate/InputFiled";
import TitleField from "../PostCreate/TitleField";

import noThumbnail from "../../assets/img/no-thumbnail.png";
import WarningText from "../PostCreate/WarningText";
import { useRef, useState } from "react";
import { Post } from "../interface";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CommentFormModal = ({ show, onHide }: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  function handleUpdloadImgByLink(e: any) {}

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.8)]  transition-all duration-200 ${
        show ? "z-20 opacity-100" : "z-[-1] opacity-0"
      } `}
    >
      <div
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-black w-[80%] h-[70%] md:w-[60%] md:h-[70%] lg:w-[40%] lg:h-[60%] rounded-md py-2 transition-all duration-200  px-2 text-left ${
          show ? "scale-100" : " scale-50"
        }`}
      >
        <TitleField>Comment image</TitleField>
        <div className="flex gap-3">
          <input
            type="text"
            className="border-[1px] w-2/3 focus:outline-none p-2 rounded-lg font-thin dark:bg-gray-500 dark:border-gray-400 dark:text-gray-100 dark:placeholder-gray-300"
            placeholder="Url link"
            // onChange={(e) => {
            //   handleUpdloadImgByLink(e);
            // }}
          />

          <input
            type="file"
            accept="image/*"
            hidden
            ref={inputFileRef}
            // onChange={(e) => handleUploadImageByFile(e)}
          />
          <button
            className="border-[1px] w-1/3 rounded-lg bg-blue-600 text-white hover:bg-blue-400 dark:border-none"
            // onClick={handleClickUploadCoverPicture}
          >
            Choose image
          </button>
        </div>

        <div className="dark:text-gray-300 flex gap-2 justify-end mt-2">
          <button
            className="bg-blue-600 px-2 py-1 text-white rounded-md w-[80px]"
            onClick={onHide}
          >
            OK
          </button>

          <button
            className="bg-red-600 px-2 py-1 text-white rounded-md  w-[80px]"
            onClick={onHide}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentFormModal;
