import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getUserInfo } from "../../store/user/action";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import UserSideBar from "./UserSideBar";

type Props = {};

const User = (props: Props) => {
  const param = useParams();
  const dispatch = useDispatch();
  const username = param.userPage;

  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setIsUserInfo] = useState({});

  useEffect(() => {
    if (username) {
      dispatch(getUserInfo({ username: username })).then((res: any) => {
        if (res.ok) {
          setIsUserInfo(res.data);
          setIsLoading(false);
        }
      });
    }
  }, [username]);

  console.log("userInfo", userInfo);

  return (
    <div className="px-2 lg:px-0">
      <UserInfo />
      <div className="mt-[120px] md:mt-[80px] flex flex-col-reverse md:flex-row gap-8">
        <UserPosts />
        <UserSideBar />
      </div>
    </div>
  );
};

export default User;
