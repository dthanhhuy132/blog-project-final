import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import CreateFastPostPage from "./pages/CreateFastPostPage";
import CreatePostPage from "./pages/CreatePostPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import UserPage from "./pages/UserPage";

import {
  getFastPosts,
  getLastestPosts,
  getPopularPosts,
} from "./store/posts/action";
import { getCategoryList } from "./store/category/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFastPosts());
    dispatch(getLastestPosts({ _limit: 7 }));
    dispatch(getPopularPosts({ love_gte: 1 }));
    dispatch(getCategoryList());
  }, []);

  return (
    <div className="App pb-5 dark:bg-[#18191a]">
      <Header />
      {/* <CarouselDemo /> */}
      <div className="lg:px-5 sm:w-full lg:w-[968px] mx-auto ">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/post" element={<UserPage />}></Route>
          <Route path="/post/:postLink" element={<PostDetailPage />}></Route>
          <Route path="/:userPage" element={<UserPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/create-post" element={<CreatePostPage />}></Route>
          <Route
            path="/create-fast-post"
            element={<CreateFastPostPage />}
          ></Route>
          <Route path="/register" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
