import React from "react";
import { Link, useLocation } from "react-router-dom";
import InputForm from "../common/InputForm";
import LoginForm from "./LoginForm";
import RegisterFrom from "./RegisterFrom";

type Props = {};

const Form = (props: Props) => {

  const location = useLocation()
  const pathname = location.pathname

  const isLoginPage = pathname.indexOf('login') >= 0;
  const isRegisterPage = pathname.indexOf('register') >= 0;

  const route = isLoginPage ? "/register" : '/login' 



  return (
    <form className="flex flex-col gap-5 border-1 border-gray-500 w-full md:w-[400px] mt-12">
     {isLoginPage && <LoginForm/>} 
     {isRegisterPage &&  <RegisterFrom/>}

      <p className="text-left inline-block text-white text-[0.8rem]">
        {isLoginPage && "Don't have an account?"}
        {isRegisterPage && "Have an account?"}
        
        <Link to={route} className="text-blue-500 ml-2">
          {isLoginPage && 'Sign Up'}
          {isRegisterPage && 'Sign In'}
        </Link>
      </p>

      <button className="mt-10 border-1 border-gray-200 bg-blue-600 py-2 rounded-lg text-white">
        Sign in
      </button>
    </form>
  );
};

export default Form;
