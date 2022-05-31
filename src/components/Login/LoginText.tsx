import React from "react";

type Props = {
  describe?: string;
};

const LoginText = ({ describe = "Welcome back!!!" }: Props) => {
  return (
    <div className="text-white ">
      Let's Share
      <p>{describe}</p>
    </div>
  );
};

export default LoginText;
