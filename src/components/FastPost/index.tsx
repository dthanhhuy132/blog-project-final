import React from "react";
import SectionTitle from "../common/SectionTitle";
import FastPostItem from "./FastPostItem";

type Props = {
  smallSize?: boolean;
};

const FastPost = ({ smallSize = false }: Props) => {
  return (
    <>
      <SectionTitle>Fast Posts</SectionTitle>
      <div className="whitespace-nowrap w-full overflow-x-auto rounded-lg">
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
        <FastPostItem smallSize={smallSize} />
      </div>
    </>
  );
};

export default FastPost;
