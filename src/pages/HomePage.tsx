import React from "react";
import FastPost from "../components/PostFast";
import LatestPost from "../components/PostPopular";
import PopularPost from "../components/PostLatest";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="px-2 md:px-1 mt-7">
      <FastPost />
      <LatestPost />
      <PopularPost />
    </div>
  );
};

export default HomePage;
