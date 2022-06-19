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
      className={`rounded-md text-white bg-blue-600 dark:text-white whitespace-nowrap mx-2 p-2 h-full border-[1px] ${
        isLoading && "bg-blue-500"
      }`}
      onClick={handleClickButton}
    >
      {!isLoading ? children : <LoadingIcon />}
    </button>
  );
};

export default Button;
