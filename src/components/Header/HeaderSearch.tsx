import React from "react";

type Props = {};

const HeaderSearch: React.FC = (props: Props) => {
  return (
    <div className="relative text-gray-600 md:border-[2px] rounded-full flex justify-end">
      <input
        type="search"
        name="serch"
        placeholder="Search"
        className="bg-white w-full h-[35px] pl-5 pr-12 rounded-full text-sm focus:outline-none focus:ring-2 hidden md:inline-block"
      />
      <i className="fa-solid fa-magnifying-glass absolute right-0 top-[50%] mr-1 sm:mr-4 translate-y-[-50%] text-[1.3rem] md:text-[1.1rem]"></i>
    </div>
  );
};

export default HeaderSearch;
