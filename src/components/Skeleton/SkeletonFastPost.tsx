import classNames from "classnames";
import Skeleton from "react-loading-skeleton";

type Props = {
  smallSize?: boolean;
  noPadding?: boolean;
};

const SkeletonFastPost = ({ smallSize = false, noPadding = false }: Props) => {
  const sizeClass = classNames({
    "md:w-[170px] md:h-[220px]": !smallSize,
    "md:w-[130px] md:h-[200px]": smallSize,
  });
  return (
    <div
      className={`relative w-[130px] h-[200px] ${sizeClass} rounded-xl overflow-hidden inline-block mr-2 
      ${!noPadding && "last:mr-0"}
      ${noPadding && "mr-0"}
      `}
    >
      <Skeleton
        width="100%"
        height="100%"
        style={{ lineHeight: "unset" }}
        highlightColor="#ffffff"
        className="brightness-[85%] dark:brightness-75"
      />
    </div>
  );
};

export default SkeletonFastPost;
