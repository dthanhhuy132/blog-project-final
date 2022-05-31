import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  inputType?: string;
};

const InputForm = ({ title, inputType = "text" }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [initInputType, setInitInputType] = useState(inputType);

  function handleClickShowPassword() {
    setIsShowPassword(!isShowPassword);
  }

  useEffect(() => {
    if (inputType === "password" && isShowPassword) {
      setInitInputType("text");
    } else if (inputType === "password" && !isShowPassword) {
      setInitInputType("password");
    }
  }, [isShowPassword]);

  return (
    <div className="flex flex-col items-start w-full">
      <label htmlFor="" className="text-white mb-1 text-[0.7rem]">
        {title}
      </label>
      <div className="relative w-full">
        <input
          type={initInputType}
          className="w-full rounded-md px-2 py-2 text-sm"
        />

        {inputType === "password" && (
          <i
            className={`fa-solid fa-eye${
              isShowPassword ? "-slash" : ""
            } absolute top-[50%] translate-y-[-50%] right-3 text-[0.8rem] text-gray-400 hover:text-gray-900 cursor-pointer`}
            onClick={handleClickShowPassword}
          ></i>
        )}
      </div>
    </div>
  );
};

export default InputForm;
