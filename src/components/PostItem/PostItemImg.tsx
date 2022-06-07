import React from "react";

type Props = {
  
  imageHeight?:number
};

const PostItemImg = ({imageHeight=0 }: Props) => {
  return (
    <img
      src="https://cdn.tgdd.vn/Files/2019/12/22/1227964/tu-van-chon-mua-ong-kinh-lens-may-anh-de-chup-anh-phong-canh-dep-nhat-1.jpg"
      alt="PostImg-Heor"
      className={`rounded-lg object-cover brightness-75 'w-full`}
      style={{height: `${imageHeight ? imageHeight+'px' : '100%'}`}}
    />
  );
};

export default PostItemImg;
