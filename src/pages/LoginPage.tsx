import React from "react";
import Login from "../components/Login";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-800 w-full z-[1]">
      <Login />
    </div>
  );
};

export default LoginPage;
