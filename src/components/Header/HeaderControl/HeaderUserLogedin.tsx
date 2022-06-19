import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../../store/user/action";
import CheckUserExist from "../../common/CheckUserExist";

type Props = {};

const HeaderUserLogedin = (props: Props) => {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, isUserExist } = CheckUserExist();

  function handleLogOut() {
    setIsShowSubMenu(false);
    navigate("/login");
    dispatch(logOut());
  }

  useEffect(() => {
    const bodyEl = document.querySelector("body");
    const subMenuEl = document.querySelector(".sub-header-menu");
    function removeSubMenu(e: any) {
      if (!subMenuEl?.contains(e.target)) {
        setIsShowSubMenu(false);
      } else {
        setIsShowSubMenu(true);
      }
    }
    bodyEl?.addEventListener("click", (e) => removeSubMenu(e));

    return () => {
      bodyEl?.removeEventListener("click", (e) => removeSubMenu(e));
    };
  }, []);

  return (
    <div
      className="sub-header-menu flex items-center ml-3 cursor-pointer lg:gap-1"
      onClick={() => setIsShowSubMenu(true)}
    >
      <>
        {currentUser ? (
          <>
            <div className="flex items-center">
              <i className="fa-solid fa-bell text-gray-500 cursor-pointer hover:text-gray-900 text-[1.3rem] dark:text-gray-300 dark:hover:text-blue-400"></i>
            </div>
            <div className="md:flex items-center gap-2 hidden ml-3 text-[1.1rem] rounded-lg md:border-[1px] border-gray-400 p-2 md:px-1 py-1 cursor-pointer dark:text-gray-200 dark:border-gray-500 relative">
              <img
                src={currentUser.avatartLink || currentUser.coverBase64}
                alt=""
                className="!w-[35px] !h-[35px] object-cover rounded-full border-[2px] border-violet-500"
              />
              <p className="px-[3px] md:pl-0 md:pr-2 capitalize">
                {currentUser.userFirstName}
              </p>
              <i className="fa-solid fa-ellipsis-vertical hidden md:inline-block mr-2"></i>

              {isShowSubMenu && (
                <ul className="absolute w-full top-[120%] left-0 rounded-lg text-left bg-gray-200 dark:bg-[#242526] py-1 flex flex-col z-50 text-[0.9rem]">
                  <li className="py-2 pl-2 hover:bg-gray-400 dark:hover:bg-black">
                    My page
                  </li>
                  <li className="py-2 pl-2 hover:bg-gray-400 dark:hover:bg-black">
                    Feedback
                  </li>
                  <li
                    className="py-2 pl-2 hover:bg-gray-400 dark:hover:bg-black"
                    onClick={handleLogOut}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <Link to="/login" className="text-[1.2rem] dark:text-gray-300 ml-2">
            <i className="fa-solid fa-user mr-2"></i>Login
          </Link>
        )}
      </>
    </div>
  );
};

export default HeaderUserLogedin;
