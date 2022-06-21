import { useDispatch, useSelector } from "react-redux";

import FastPost from "../components/PostFast";
import PopularPost from "../components/PostPopular";
import LatestPost from "../components/PostLatest";
import { useEffect } from "react";
import { RESET_POST } from "../store/user/action";

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  const popularPosts = useSelector((state: any) => state.Posts.populartPosts);
  const allFastPost = useSelector((state: any) => state.Posts.fastPosts);
  const { data: popularData, pagination: popularPagination } = popularPosts;
  const { data: fastPostData, pagination: fastPostPagination } = allFastPost;

  useEffect(() => {
    dispatch({ type: RESET_POST });
  }, []);

  return (
    <div className="px-2 md:px-2 mt-7">
      <FastPost data={fastPostData} pagination={fastPostPagination} />
      <PopularPost data={popularData} pagination={popularPagination} />
      <LatestPost />
    </div>
  );
};

export default HomePage;
