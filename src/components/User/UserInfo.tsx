import React from "react";
import { User } from "../interface/user";

type Props = {
  userInfo: User | null;
};

const UserInfo = ({ userInfo }: Props) => {
  return (
    <div className="relative">
      <div className="w-full h-[250px] md:h-[350px] ">
        <img
          src={userInfo?.coverBase64 || userInfo?.coverLink}
          alt=""
          className="w-full h-full object-cover rounded-br-lg"
        />
      </div>

      <div>
        <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] md:left-0 md:translate-x-[unset] flex flex-col items-center md:flex-row md:items-end">
          <img
            src={userInfo?.avatarBase64 || userInfo?.avatartLink}
            alt=""
            className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
          />
          <div className="flex flex-col items-center md:items-start dark:text-white">
            <p className="whitespace-nowrap ml-2 font-bold text-[1.4rem] md:text-[1.6rem] ">
              {userInfo?.userFirstName} {userInfo?.userLastName}
            </p>

            <p className="whitespace-nowrap ml-2 text-[0.9rem] md:text-[1.1rem]">
              {userInfo?.userDescription}
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default UserInfo;
