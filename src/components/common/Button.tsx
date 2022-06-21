import React from "react";
import LoadingIcon from "./LoadingIcon";

type Props = {
  children: string;
  isLoading?: boolean;
  handleClick?: () => void;
};

const Button = ({
  children,
  isLoading = false,
  handleClick = () => {},
}: Props) => {
  function handleClickButton() {
    if (isLoading) return;
    handleClick();
  }
  return (
    <button
      className={`rounded-md text-white bg-blue-600 hover:bg-blue-400 hover:text-gray-900 whitespace-nowrap h-full w-full py-3 mt-2 order-[1px] font-bold text-[1.2rem] ${
        isLoading && "bg-blue-400 pointer-events-none"
      }`}
      onClick={handleClickButton}
    >
      {!isLoading ? children : <LoadingIcon />}
    </button>
  );
};

export default Button;
