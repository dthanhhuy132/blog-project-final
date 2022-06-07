import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarouselDemo from "./components/CarouselDemo";
import Header from "./components/Header";
import CreatePostPage from "./pages/CreatePostPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App mb-5">
      <Header />
      {/* <CarouselDemo /> */}
      <div className="lg:px-5 sm:w-full lg:w-[968px] mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/post" element={<UserPage />}></Route>
          <Route path="/post/:postLink" element={<PostDetailPage />}></Route>
          <Route path="/:userPage" element={<UserPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/create-post" element={<CreatePostPage />}></Route>
          <Route path="/register" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
