import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { iCategory } from "../interface";
import WarningText from "./WarningText";

type Props = {
  validate: string;
  clearValidate: () => void;
  setPostCategory: (categoryList: any) => void;
  postCategory: any;
};

const Category = ({
  validate,
  clearValidate,
  setPostCategory,
  postCategory,
}: Props) => {
  const [categoryArr, setCategoryArr] = useState<string[]>(postCategory);
  const category: iCategory[] = useSelector((state: any) => state.Category);

  function handleClickInputCheckCaterogy(slug: string) {
    if (categoryArr.indexOf(slug) < 0) {
      setCategoryArr((pre: string[]) => [...pre, slug]);
    } else {
      setCategoryArr((pre) => pre.filter((item) => item !== slug));
    }
  }

  useEffect(() => {
    if (categoryArr) {
      clearValidate();
    }
    setPostCategory(categoryArr);
  }, [categoryArr]);

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
                checked={categoryArr && categoryArr?.indexOf(item.slug) >= 0}
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

          {validate && <WarningText warningText={validate} />}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Category;
