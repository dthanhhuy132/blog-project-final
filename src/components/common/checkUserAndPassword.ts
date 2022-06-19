import { useSelector } from "react-redux";
import { User } from "../interface/user";


const checkUserAndPassword = (allUser:User[], userData:any, type = 'checkLogin') => {
  let result = {
    isValid: false,
    currentUser: {}
  };
  if(type === 'checkLogin') {
    allUser.forEach(item => {
      if(item.username.toLowerCase() === userData.username.toLowerCase() && item.userPassword === userData.userPassword) {
        return result = {
          isValid: true,
          currentUser: item
        }
      }
    })
  }

  if(type === 'checkRegister' && allUser.length > 0) {
    allUser.forEach(item => {
      if(item.username.toLowerCase === userData.username.toLowerCase()) {
        return result = {
          isValid: true,
          currentUser: {}
        }
      }
    })
  }

  return result
  
}

export default checkUserAndPassword 