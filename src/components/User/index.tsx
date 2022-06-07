import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import UserSideBar from "./UserSideBar";

type Props = {};

const User = (props: Props) => {
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
