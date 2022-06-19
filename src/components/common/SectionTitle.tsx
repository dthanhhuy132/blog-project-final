import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: string;
  top?: number;
  link?: string;
  className?: string;
};

const SectionTitle = ({ children, top = 7, link, className }: Props) => {
  return (
    <div
      className={`flex flex-row  mt-${top} justify-between border-b-2 border-b-[#888] mb-6 ${className}`}
    >
      <h2
        className={`text-left font-bold text-[1.2rem] md:text-[1.5rem] dark:text-gray-100`}
      >
        {children}
      </h2>

      {link && (
        <Link to={link} className="text-blue-500 flex items-center mt-2">
          See More
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
