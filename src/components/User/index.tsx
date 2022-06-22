import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  getUserFastPost,
  getUserInfo,
  getUserLatestPost,
  getUserPopularPost,
  RESET_POST,
} from "../../store/user/action";
import { User } from "../interface/user";
import SkeletonUserPage from "../Skeleton/SkeletonUserPage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import UserSideBar from "./UserSideBar";

type Props = {};

const UserProfile = (props: Props) => {
  const param = useParams();

  const dispatch = useDispatch();
  const username = param.userPage;

  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setIsUserInfo] = useState<User | undefined>(undefined);

  const { currentUser, allUser, userPosts } = useSelector(
    (state: any) => state.User
  );

  const { lastestPosts, popularPosts, fastPosts } = userPosts;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (username) {
      dispatch(getUserInfo({ username: username })).then((res: any) => {
        if (res.ok) {
          setIsUserInfo(res.data);
          if (res.data.id) {
            dispatch(getUserLatestPost({ userId: res.data.id })).then(
              (res: any) => setIsLoading(false)
            );
            dispatch(getUserPopularPost({ userId: res.data.id, love_gte: 1 }));
            dispatch(getUserFastPost({ userId: res.data.id }));
          }
        }
      });
    }
  }, [username]);

  return (
    <div className="px-2 lg:px-0">
      {isLoading ? (
        <SkeletonUserPage />
      ) : (
        <>
          <UserInfo userInfo={userInfo} />
          <div className="mt-[120px] md:mt-[80px] flex flex-col-reverse md:flex-row gap-8">
            <UserPosts lastestPosts={lastestPosts} />
            <UserSideBar popularPosts={popularPosts} fastPosts={fastPosts} />
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
