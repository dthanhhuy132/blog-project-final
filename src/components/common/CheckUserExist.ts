import { useSelector } from "react-redux"
import { User } from "../interface/user"

export default function CheckUserExist():{currentUser:User | null, isUserExist:boolean} {
  const currentUser = useSelector((state:any) => state.User.currentUser)
  
  if(currentUser) {
    return {
      currentUser: currentUser ,
      isUserExist: true
    }
  }
  
  return {
    currentUser: null ,
    isUserExist: false
  }
  
}