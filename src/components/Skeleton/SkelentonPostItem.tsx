import classNames from "classnames";
import React from "react";
import Skeleton from "react-loading-skeleton";

type Props = {
  normalView?: boolean;
  showDetail?: boolean;
  titleSmaller?: boolean;
  smallImage?: boolean;
  noAuthor?: boolean;
  lineClamp?: number;
  height?: number;
  imageHeight?: number;
};

const SkelentonPostItem = ({
  normalView = false,
  showDetail = false,
  titleSmaller = false,
  noAuthor = false,
  lineClamp = 2,
  imageHeight = 0,
}: Props) => {
  const classes = classNames("text-left line-clamp-2", {
    "text-white text-[1.5rem] md:text-[1.8rem] font-bold": !normalView,
    "text-black text-[1.1rem] md:text-[1.1rem] font-semibold": normalView,
    "text-white text-[1rem] md:text-[1.4rem] font-semibold": titleSmaller,
  });

  return (
    <div
      className={`w-full h-full relative rounded-lg flex
      ${normalView && "flex gap-2"}
      `}
    >
      <div className={`${normalView && "w-1/3"} w-full rounded-xl`}>
        <Skeleton
          highlightColor="#ffffff"
          className="rounded-lg object-cover brightness-[85%] dark:brightness-75 w-full"
          style={{ height: `${imageHeight ? imageHeight + "px" : "100%"}` }}
        />
      </div>
      {normalView && (
        <div
          className={`text-left w-full flex flex-col justify-center py-2 ${
            normalView ? "w-2/3" : "absolute bottom-2"
          }`}
        >
          <Skeleton
            highlightColor="#ffffff"
            className={`${classes} brightness-[85%] dark:brightness-75 dark:text-gray-300 line-clamp-2`}
            count={5}
          />
        </div>
      )}
    </div>
  );
};

export default SkelentonPostItem;
