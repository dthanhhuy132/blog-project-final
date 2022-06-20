import postApi from "../../services/postApi";
import userApi from "../../services/user";

export const GET_ALL_USER = 'GET_ALL_USER';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const LOGIN = "LOGIN";
export const LOGOUT = 'LOGOUT';

export const GET_USER_LATESTPOST = 'GET_USER_LATESTPOST';
export const GET_USER_POPULAR = 'GET_USER_POPULAR';
export const GET_USER_FASTPOST = 'GET_USER_FASTPOST';

export const GET_MORE_USER_LATESTPOST = 'GET_MORE_USER_LATESTPOST';
export const GET_MORE_USER_POPULAR = 'GET_MORE_USER_POPULAR';
export const GET_MORE_USER_FASTPOST = 'GET_MORE_USER_FASTPOST';

export const RESET_POST = 'RESET_POST'

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


export const getUserLatestPost:any = ({_page = 1,...restParams} = {}) => {
  return async (dispatch:any) => {
    try {
      const res = await postApi.getPosts({_page, ...restParams})
      dispatch({
        type: _page === 1 ? GET_USER_LATESTPOST : GET_MORE_USER_LATESTPOST,
        payload: res.data
      })
      
    } catch (error) {
      console.log('Error', error)
    }
  }
} 

export const getUserPopularPost:any = ({_page = 1,_sort='love',...restParams} = {}) => {
  return async (dispatch:any) => {
    try {
      const res = await postApi.getPosts({_page,_sort,...restParams})
      dispatch({
        type: _page===1 ? GET_USER_POPULAR : GET_MORE_USER_POPULAR,
        payload: res.data
      })
      
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const getUserFastPost:any = ({_page = 1,...restParams} = {}) => {
  return async (dispatch:any) => {
    try {
      const res = await postApi.getFastPosts({_page, ...restParams})
      console.log('res.data trong fastpost', res.data)
      dispatch({
        type: _page === 1 ? GET_USER_FASTPOST : GET_MORE_USER_FASTPOST,
        payload: res.data,
      })      
    } catch (error) {
      console.log('Error', error)
    }
  }
} 

