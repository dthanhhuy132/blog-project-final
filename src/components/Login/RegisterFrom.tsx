import React from "react";
import InputForm from "../common/InputForm";

type Props = {};

const RegisterFrom = (props: Props) => {
  return (
    <>
      <InputForm title="Username" />
      <div className="w-full flex gap-2">
        <div className="w-1/2">
          <InputForm title="Your Last Name" />
        </div>
        <div className="w-1/2">
          <InputForm title="Your First Name" />
        </div>
      </div>
      <InputForm title="Password" inputType="password" />
      <InputForm title="Re-password" inputType="password" />
    </>
  );
};

export default RegisterFrom;
