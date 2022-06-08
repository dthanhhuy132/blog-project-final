import React from "react";
import WarningText from "./WarningText";

type Props = {
  row?: number;
  placeholder?: string;
  inputChange: any;
  validate?: string;
  clearValidate: () => void;
};

const InputFiled = ({
  row = 1,
  placeholder = "Write your post title...",
  inputChange,
  validate = "",
  clearValidate,
}: Props) => {
  function handleInputCmt(e: any) {
    clearValidate();
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
  return (
    <>
      <textarea
        name=""
        id=""
        rows={row}
        onInput={(e) => handleInputCmt(e)}
        onChange={(e) => inputChange(e)}
        placeholder={placeholder}
        className={`w-full focus:outline-none p-2 text-[0.9rem] resize-none overflow-y-hidden bg-transparent border-[1px] rounded-lg dark:border-gray-600 dark:text-gray-300 ${
          validate && "!border-red-500 "
        }`}
      ></textarea>

      {validate && <WarningText warningText={validate} />}
    </>
  );
};

export default InputFiled;
