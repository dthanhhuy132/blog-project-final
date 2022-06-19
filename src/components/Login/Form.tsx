import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserState } from "../../store/user/reducer";
import InputForm from "../common/InputForm";
import LoginForm from "./LoginForm";
import RegisterFrom from "./RegisterFrom";
import checkUserAndPassword from "../common/checkUserAndPassword";
import { logIn } from "../../store/user/action";

type Props = {};

const Form = (props: Props) => {
  const [loginData, setLoginData] = useState({
    userName: "",
    userPassword: "",
  });
  const [isSavePassword, setIsSavePassword] = useState(true);
  const [registerData, setRegisterData] = useState({
    userName: "",
    userFirstName: "",
    userLastName: "",
    userPassword: "",
    userRePassword: "",
  });
  const [warningText, setWarningText] = useState("");

  const allUser = useSelector((state: any) => state.User.allUser);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoginPage = location.pathname.indexOf("login") >= 0;
  const route = isLoginPage ? "/register" : "/login";

  function handleLogin(e: any) {
    e.preventDefault();
    const loginCheckData = checkUserAndPassword(allUser, loginData);

    if (loginCheckData.isValid) {
      dispatch(logIn(loginCheckData.currentUser));
      if (isSavePassword) {
        localStorage.setItem(
          "user",
          JSON.stringify(loginCheckData.currentUser)
        );
      }
      navigate("/");
    }
  }

  function handleRegister() {}

  return (
    <form
      autoComplete="off"
      className="flex flex-col gap-5 border-1 border-gray-500 w-full md:w-[400px] mt-12"
    >
      {isLoginPage ? (
        <LoginForm
          loginData={loginData}
          setLoginData={setLoginData}
          isSavePassword={isSavePassword}
          setIsSavePassword={setIsSavePassword}
        />
      ) : (
        <RegisterFrom />
      )}

      <p className="text-left inline-block text-white text-[0.8rem]">
        {isLoginPage ? "Don't have an account?" : "Have an account?"}

        <Link to={route} className="text-blue-500 ml-2">
          {isLoginPage ? "Sign Up" : "Sign in"}
        </Link>
      </p>
      {isLoginPage ? (
        <button
          className="mt-10 border-1 border-gray-200 bg-blue-600 py-2 rounded-lg text-white"
          onClick={(e) => handleLogin(e)}
        >
          Sign in
        </button>
      ) : (
        <button
          className="mt-10 border-1 border-gray-200 bg-blue-600 py-2 rounded-lg text-white"
          onClick={handleRegister}
        >
          Sign Up
        </button>
      )}
    </form>
  );
};

export default Form;
