import React from "react";
import SectionTitle from "../common/SectionTitle";
import CustomSkeleton from "./CustomSkeleton";
import SkeletonFastPost from "./SkeletonFastPost";
import SkelentonPostItem from "./SkeletonPostItem";

type Props = {};

const SkeletonUserPage = (props: Props) => {
  return (
    <>
      {/* userstart */}
      <div className="relative">
        <div className="w-full h-[250px] md:h-[350px]">
          <CustomSkeleton className="w-full h-full object-cover rounded-br-lg" />
        </div>

        <div>
          <div className=" absolute left-[50%] translate-x-[-50%] translate-y-[-50%] md:left-0 md:translate-x-[unset] flex flex-col items-center md:flex-row md:items-end z-10">
            <CustomSkeleton
              borderRadius="50%"
              baseColor="gray"
              width="120px"
              height="120px"
            />
            <div className="flex flex-col items-center md:items-start ml-4">
              <CustomSkeleton
                width="400px"
                height="25px"
                className="mb-1"
                count={2}
                baseColor="gray"
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>
      {/* userend */}
      <div className="mt-[120px] flex flex-col-reverse md:flex-row gap-8">
        {/* <UserPosts /> */}
        <div className="w-full md:w-3/5 text-left">
          <SectionTitle>Tất cả bài viết</SectionTitle>

          <div className="flex flex-col gap-4 mt-2">
            <div className="w-full flex gap-4 h-[280px]">
              <div className="w-1/2">
                <SkelentonPostItem />
              </div>
              <div className="w-1/2">
                <SkelentonPostItem />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <SkelentonPostItem normalView showDetail />
              <SkelentonPostItem normalView showDetail />
              <SkelentonPostItem normalView showDetail />
              <SkelentonPostItem normalView showDetail />
            </div>
          </div>
        </div>
        {/* <UserSideBar /> */}
        <div className="md:w-2/5">
          {/* <FastPost smallSize data={data} /> */}
          <>
            <SectionTitle>Fast Post</SectionTitle>
            <div className="overflow-hidden whitespace-nowrap">
              {Array.from(Array(5)).map((v, i) => (
                <SkeletonFastPost smallSize />
              ))}
            </div>
          </>

          <div>
            <SectionTitle>Top Yêu thích</SectionTitle>
            <div className="flex flex-col gap-4 md:border-l-[2px] border-gray-400">
              {Array.from(Array(4)).map((v, i) => (
                <div
                  className="flex justify-between gap-1 items-starts"
                  key={i}
                >
                  <span className="font-bold text-gray-500 text-[2rem] inline-block w-[60px]">
                    #{i + 1}
                  </span>
                  <SkelentonPostItem
                    normalView
                    smallImage
                    noAuthor
                    showDetail
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonUserPage;
