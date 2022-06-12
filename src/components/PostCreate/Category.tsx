import React, { useState } from "react";
import { useSelector } from "react-redux";
import { iCategory } from "../interface";

type Props = {};

const Category = (props: Props) => {
  const [categoryArr, setCategoryArr] = useState<string[]>([]);
  const category: iCategory[] = useSelector((state: any) => state.Category);

  function handleClickInputCheckCaterogy(slug: string) {
    if (categoryArr.indexOf(slug) < 0) {
      setCategoryArr((pre: string[]) => [...pre, slug]);
    } else {
      setCategoryArr((pre) => pre.filter((item) => item !== slug));
    }
  }

  console.log("categoryArr", categoryArr);

  return (
    <>
      {category.length > 0 ? (
        <div className="flex  flex-wrap gap-y-2 mt-2 w-full">
          {category.map((item, i) => (
            <div
              className="flex items-start w-[50%] md:w-[33%] lg:w-[25%] gap-2"
              key={i}
            >
              <input
                type="checkbox"
                name="group"
                id={item.slug}
                className="w-[20px] h-[20px]"
                onChange={() => handleClickInputCheckCaterogy(item.slug)}
              />
              <label
                htmlFor={item.slug}
                className="text-[0.9rem] dark:text-gray-300"
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Category;
