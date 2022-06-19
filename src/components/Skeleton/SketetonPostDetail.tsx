import React from "react";
import CustomSkeleton from "./CustomSkeleton";

type Props = {};

const SketetonPostDetail = (props: Props) => {
  return (
    <>
      <div className="w-3/4 h-full rounded-br-xl rounded-bl-xl overflow-hidden">
        <div className="relative w-full h-full rounded-br-2xl rounded-bl-2xl overflow-hidden">
          <CustomSkeleton height="70vh" />

          <div className="absolute bottom-2 left-2 text-white text-left z-10 w-full pl-2 pr-4">
            <CustomSkeleton
              width="100%"
              count={2}
              baseColor="gray"
              className="mb-2"
            />

            <div className="flex flex-row gap-5 items-center">
              <CustomSkeleton
                width="40px"
                height="40px"
                borderRadius="50%"
                baseColor="gray"
                className="mb-2"
              />
              <CustomSkeleton
                width="150px"
                baseColor="gray"
                className="mb-2 flex"
              />
              <CustomSkeleton
                width="150px"
                baseColor="gray"
                className="mb-2 flex"
              />
            </div>
          </div>
        </div>

        <p className="text-center md:text-justify mt-5 font-semibold text-[1rem] flex flex-col">
          <CustomSkeleton count={5} className="mb-2" />
        </p>
      </div>

      {/* sideBar */}
      <div className="flex flex-col gap-10 w-1/4 h-[90vh] overflow-hidden">
        <div>
          <CustomSkeleton height="40px" className="mb-3" />
          <CustomSkeleton count={3} height="20px" />
        </div>

        <div>
          <CustomSkeleton height="40px" className="mb-3" />
          <CustomSkeleton count={4} height="200px" className="mb-3" />
        </div>

        {/* Category */}
      </div>
    </>
  );
};

export default SketetonPostDetail;
