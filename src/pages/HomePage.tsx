import React from "react";
import FastPost from "../components/FastPost";
import LatestPost from "../components/PopularPost";
import PopularPost from "../components/LatestPost";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="px-2 md:px-1">
      <FastPost />
      <LatestPost />
      <PopularPost />
    </div>
  );
};

export default HomePage;
