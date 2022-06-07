import React from "react";

type Props = {
  commentParent?:boolean
};

const CommentAvatar = ({commentParent = false}: Props) => {
  console.log('commentParent',commentParent)

  return (
    <>
    <img
        src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt=""
        className={`relative w-[30px] h-[30px] md:w-[50px] md:h-[50px] object-cover rounded-full border-blue-500 border-2`}
      />

      
    
    </>
  );
};

export default CommentAvatar;

// after:content-[''] after:absolute after:top-0 after:left-0 after:w-[50px] after:h-[50px] after:bg-red-500 after:z-20