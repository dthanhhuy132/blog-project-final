import userApi from "../../services/user";

export const GET_ALL_USER = 'GET_ALL_USER';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const LOGIN = "LOGIN";
export const LOGOUT = 'LOGOUT';


export function logIn(userData:any) {
  return {
    type:LOGIN,
    payload: userData
  }
}

export function logOut():any {
  return {
    type:LOGOUT
  }
}

export function getAllUser():any {
  return async (dispatch:any) => {
    try {
      const res = await userApi.getAllUser();
      dispatch({
        type:GET_ALL_USER,
        payload:res.data
      })
    } catch (error) {
      
    }
  }
}

export function getUserInfo({...param} = {}):any {
  return async () => {
    try {
      const res = await userApi.getUserInfo({...param})
      return {
        ok:true,
        data:res.data[0]
      }
    } catch (error) {
      return {
        ok:false
      }
    }
  }
}