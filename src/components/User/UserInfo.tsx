import React from "react";

type Props = {};

const UserInfo = (props: Props) => {
  return (
    <div className="relative">
      <div className="w-full h-[200px] md:h-[250px] ">
        <img
          src="https://wallpaperaccess.com/full/2667331.jpg"
          alt=""
          className="w-full h-full object-cover rounded-br-lg"
        />
      </div>

      <div>
        <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] md:left-0 md:translate-x-[unset] flex flex-col items-center md:flex-row md:items-end">
          <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt=""
            className="rounded-full"
          />
          <div className="flex flex-col items-center md:items-start">
            <p className="whitespace-nowrap ml-2 font-bold text-[1.4rem] md:text-[1.6rem]">
              Huy Đoàn
            </p>

            <p className="whitespace-nowrap ml-2 text-[0.9rem] md:text-[1.1rem]">
              Thanh niên tạo page
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default UserInfo;
