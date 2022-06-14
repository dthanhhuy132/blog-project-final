import React from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";
import LoginText from "./LoginText";

type Props = {};

function Login({}: Props) {
  const location = useLocation();
  const isLoginPage = location.pathname.indexOf("login") >= 0;

  return (
    <div className="flex justify-center md:items-center h-full w-full">
      <div className="hidden lg:block lg:w-2/3">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg"
          alt=""
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      <div className="lg:w-1/3 flex flex-col items-center justify-center w-full px-2">
        <LoginText describe={isLoginPage ? "Welcome back" : "Welcome!!!"} />
        <Form />
      </div>
    </div>
  );
}

export default Login;
