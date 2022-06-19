import React from "react";
import Skeleton from "react-loading-skeleton";

type Props = {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  count?: number;
  className?: string;
  baseColor?: string;
  highlightColor?: string;
};

const CustomSkeleton = ({
  width,
  height,
  borderRadius,
  count = 1,
  className = "",
  baseColor = "#ebebeb",
  highlightColor = "#ffffff",
}: Props) => {
  return (
    <Skeleton
      className={`brightness-[85%] dark:brightness-75 ${className}`}
      count={count}
      style={{ lineHeight: "unset" }}
      highlightColor={highlightColor}
      baseColor={baseColor}
      width={width ? width : "100%"}
      height={height ? height : "100%"}
      borderRadius={borderRadius ? borderRadius : "0.25rem"}
    />
  );
};

export default CustomSkeleton;
