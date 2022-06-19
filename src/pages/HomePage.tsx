import { useSelector } from "react-redux";

import FastPost from "../components/PostFast";
import PopularPost from "../components/PostPopular";
import LatestPost from "../components/PostLatest";

type Props = {};

const HomePage = (props: Props) => {
  const popularPosts = useSelector((state: any) => state.Posts.populartPosts);
  const { data: popularData, pagination: popularPagination } = popularPosts;

  return (
    <div className="px-2 md:px-2 mt-7">
      <FastPost />
      <PopularPost data={popularData} pagination={popularPagination} />
      <LatestPost />
    </div>
  );
};

export default HomePage;
