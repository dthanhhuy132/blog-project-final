import React from "react";

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return (
    <button className="my-3 px-10 py-2 rounded-md text-white bg-blue-600">
      {children}
    </button>
  );
};

export default Button;
