import React from "react";
import { Link, useLocation } from "react-router-dom";
import InputForm from "../common/InputForm";
import LoginForm from "./LoginForm";
import RegisterFrom from "./RegisterFrom";

type Props = {};

const Form = (props: Props) => {
  const location = useLocation();
  const isLoginPage = location.pathname.indexOf("login") >= 0;

  const route = isLoginPage ? "/register" : "/login";

  return (
    <form
      className="flex flex-col gap-5 border-1 border-gray-500 w-full md:w-[400px] mt-12"
      autoComplete="off"
    >
      {isLoginPage ? <LoginForm /> : <RegisterFrom />}

      <p className="text-left inline-block text-white text-[0.8rem]">
        {isLoginPage ? "Don't have an account?" : "Have an account?"}

        <Link to={route} className="text-blue-500 ml-2">
          {isLoginPage ? "Sign In" : "Sign up"}
        </Link>
      </p>

      <button className="mt-10 border-1 border-gray-200 bg-blue-600 py-2 rounded-lg text-white">
        {isLoginPage ? "Sign Up" : "Sign in"}
      </button>
    </form>
  );
};

export default Form;
