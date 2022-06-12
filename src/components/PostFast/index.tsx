import React from "react";

import SectionTitle from "../common/SectionTitle";
import { FastPost, Pagination } from "../interface";
import FastPostItem from "./FastPostItem";
import Skeleton from "react-loading-skeleton";
import SkeletonFastPost from "../Skeleton/SkeletonFastPost";

type Props = {
  smallSize?: boolean;
  data: FastPost[];
  pagination?: Pagination;
};

const FastPostComponent = ({ smallSize = false, data }: Props) => {
  return (
    <>
      <SectionTitle>Fast Posts</SectionTitle>
      <div className="whitespace-nowrap w-full overflow-x-auto rounded-lg text-left">
        {data.length > 0 ? (
          data.map((fastPost: FastPost, index: number) => (
            <FastPostItem key={index} fastPost={fastPost} />
          ))
        ) : (
          <div className="overflow-x-hidden">
            {Array.from(Array(10)).map((v, i) => (
              <SkeletonFastPost key={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FastPostComponent;
