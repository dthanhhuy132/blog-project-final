import React from "react";

type Props = {};

const HeaderSearch: React.FC = (props: Props) => {
  return (
    <div className="relative h-[36px] text-gray-600 rounded-full flex justify-end">
      <input
        type="search"
        name="serch"
        placeholder="Search"
        className="bg-white w-full pl-5 pr-12 rounded-full text-sm focus:outline-none border-2 border-gray-300 focus:border-none focus:ring-2 hidden md:inline-block 
        dark:bg-gray-300 dark:focus:ring-0 dark:focus:shadow-[0px_0px_10px_#f1f1f1]"
      />
      <i className="fa-solid fa-magnifying-glass absolute right-0 top-[50%] mr-1 sm:mr-4 translate-y-[-50%] text-[1.3rem] md:text-[1.1rem]"></i>
    </div>
  );
};

export default HeaderSearch;
