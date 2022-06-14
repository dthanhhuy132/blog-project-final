import React from "react";
import logo from "../../assets/img/LogoWhite.png";

type Props = {
  describe?: string;
};

const LoginText = ({ describe = "Welcome back!!!" }: Props) => {
  return (
    <div className="text-white ">
      <img src={logo} alt="" className="w-[200px]" />
      <p>{describe}</p>
    </div>
  );
};

export default LoginText;
