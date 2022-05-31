import React from "react";

type Props = { children: string };

const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="text-left border-b-2 border-b-[#888] mb-2 font-bold text-[1.2rem] md:text-[1.5rem] mt-7">
      {children}
    </h2>
  );
};

export default SectionTitle;
