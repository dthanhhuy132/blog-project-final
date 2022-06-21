import "animate.css";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
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
import { getAllUser, RESET_POST } from "./store/user/action";
import CheckUserExist from "./components/common/CheckUserExist";
import FastPostPage from "./pages/FastPostPage";

function App() {
  const dispatch = useDispatch();
  const param = useParams();

  console.log("param ngoai app", param);

  const { isUserExist } = CheckUserExist();

  useEffect(() => {
    dispatch(getFastPosts());
    dispatch(getLastestPosts());
    dispatch(getPopularPosts({ love_gte: 1 }));
    dispatch(getCategoryList());

    dispatch(getAllUser());
  }, []);

  return (
    <div className="App pb-5 dark:bg-[#18191a]">
      <Header />
      {/* <CarouselDemo /> */}
      <div className="lg:px-5 sm:w-full lg:w-[1124px] mx-auto ">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/post" element={<UserPage />}></Route>
          <Route path="/post/:postid" element={<PostDetailPage />}></Route>
          <Route path="/fastpost/:id" element={<FastPostPage />}></Route>
          <Route
            path="/:username/fastpost/:id"
            element={<FastPostPage />}
          ></Route>
          <Route path="/:userPage" element={<UserPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          {isUserExist && (
            <>
              <Route path="/create-post" element={<CreatePostPage />}></Route>
              <Route
                path="/create-fast-post"
                element={<CreateFastPostPage />}
              ></Route>
            </>
          )}
          <Route path="/register" element={<LoginPage />}></Route>
          <Route
            path="/edit-post/:postslug"
            element={<CreatePostPage />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
