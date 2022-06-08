import React from "react";

type Props = {
  children: string;
};

const TitleField = ({ children }: Props) => {
  return (
    <label htmlFor="" className="font-bold mb-1 dark:text-gray-200">
      {children}
    </label>
  );
};

export default TitleField;
