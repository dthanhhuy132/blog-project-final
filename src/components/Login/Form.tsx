import React from "react";
import { Link } from "react-router-dom";
import InputForm from "../common/InputForm";

type Props = {};

const Form = (props: Props) => {
  return (
    <form className="flex flex-col gap-5 border-1 border-gray-500 w-full md:w-[400px] mt-12">
      <InputForm title="Username" />
      <InputForm title="Password" inputType="password" />

      <p className="text-left inline-block text-white text-[0.8rem]">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Sign Up
        </Link>
      </p>

      <button className="mt-10 border-1 border-gray-200 bg-blue-600 py-2 rounded-lg text-white">
        Sign in
      </button>
    </form>
  );
};

export default Form;
