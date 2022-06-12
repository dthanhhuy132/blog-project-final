import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import { AllContext } from "../../Provider";

type Props = {};

const HeaderControlThemeMode = (props: Props) => {
  const { setThemeMode } = useContext(AllContext);

  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const htmlEl = document.querySelector("html");

  function handleChange() {
    setChecked(!checked);
  }

  useEffect(() => {
    if (checked) {
      htmlEl?.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setThemeMode("dark");
    } else {
      htmlEl?.classList.remove("dark");
      localStorage.removeItem("theme");
      setThemeMode("");
    }
  }, [checked]);

  return (
    <div className="hidden md:flex items-center">
      <Switch
        onChange={handleChange}
        checked={checked}
        height={17}
        width={40}
        handleDiameter={27}
        onColor="#f2da06"
        uncheckedHandleIcon={
          <i className="fa-solid fa-sun absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "></i>
        }
        checkedHandleIcon={
          <i className="fa-solid fa-moon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></i>
        }
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      />
    </div>
  );
};

export default HeaderControlThemeMode;
