import React from "react";
import { useParams } from "react-router-dom";
import User from "../components/User";

type Props = {};

const UserPage = (props: Props) => {
  const param = useParams()

  console.log('param',param)
  return <User />;
};

export default UserPage;
