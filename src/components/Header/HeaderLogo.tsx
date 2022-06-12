import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../../assets/img/Logo.png";
import logoWhite from "../../assets/img/LogoWhite.png";
import { AllContext } from "../Provider";

type Props = {};

const HeaderLogo = ({}: Props) => {
  const { themeMode } = useContext(AllContext);

  return (
    <div className="flex justify-start">
      <Link to="/">
        <img
          src={themeMode === "dark" ? logoWhite : logoBlack}
          alt=""
          className="w-[120px]"
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
