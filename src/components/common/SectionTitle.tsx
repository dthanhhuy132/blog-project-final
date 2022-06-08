import React from "react";

type Props = { children: string; top?: number };

const SectionTitle = ({ children, top = 7 }: Props) => {
  return (
    <h2
      className={`text-left border-b-2 border-b-[#888] mb-2 font-bold text-[1.2rem] md:text-[1.5rem] mt-${top} dark:text-gray-100`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
