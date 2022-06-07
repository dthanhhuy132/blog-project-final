import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.png";

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <div className="flex justify-start">
      <Link to="/">
        <img src={logo} alt="" className="w-[120px]" />
      </Link>
    </div>
  );
};

export default HeaderLogo;
