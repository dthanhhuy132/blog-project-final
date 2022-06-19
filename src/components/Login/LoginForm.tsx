import React, { SetStateAction } from "react";
import InputForm from "../common/InputForm";

type Props = {
  loginData: any;
  setLoginData: any;
  isSavePassword: boolean;
  setIsSavePassword: any;
};

const LoginForm = ({
  loginData,
  setLoginData,
  isSavePassword,
  setIsSavePassword,
}: Props) => {
  return (
    <>
      <InputForm
        title="Username"
        handleChange={(text: string) =>
          setLoginData({ ...loginData, username: text })
        }
      />
      <InputForm
        title="Password"
        inputType="password"
        handleChange={(text: string) =>
          setLoginData({ ...loginData, userPassword: text })
        }
      />

      <div className="text-left mt-2">
        <label
          htmlFor="Remember me"
          className="form-label select-none flex items-center cursor-pointer dark:text-gray-300 text-[0.9rem]"
        >
          <input
            type="checkbox"
            id="Remember me"
            className="mr-3 cursor-pointer w-[18px] h-[18px]"
            checked={isSavePassword}
            onChange={() => setIsSavePassword(!isSavePassword)}
          />
          Remember me!
        </label>
      </div>
    </>
  );
};

export default LoginForm;
