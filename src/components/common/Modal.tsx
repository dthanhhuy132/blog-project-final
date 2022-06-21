import React from "react";
import { JsxElement } from "typescript";

type Props = {
  children?: JsxElement;
  okFunc?: () => void;
  cancelFunc?: () => void;
  title?: string;
};

const Modal = ({
  children,
  okFunc = () => {},
  cancelFunc = () => {},
  title = "hong co title ha",
}: Props) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] z-10"></div>
      <div className="fixed top-[50%] left-[50%] z-20 translate-x-[-50%] translate-y-[-50%] flex items-center flex-col gap-4 border-[1px] rounded-lg py-3 border-gray-400 min-w-[300px] bg-white dark:bg-black dark:text-white">
        <div className="text-[1.2rem] font-bold border-b-[2px] border-gray-300">
          {title}
        </div>
        <div className="flex gap-2 dark:text-gray-200 text-[1.1rem] text-white">
          <button
            className="px-2 py-1 w-[100px] border-[1px] rounded-md bg-red-600 hover:bg-red-700"
            onClick={okFunc}
          >
            Ok
          </button>
          <button
            className="px-2 py-1 w-[100px] border-[1px] rounded-md bg-blue-600 hover:bg-blue-700"
            onClick={cancelFunc}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
