import { Post } from "../../components/interface";
import postApi from "../../services/postApi";

export const GET_FAST_POSTS='GET_FAST_POSTS';
export const GET_POPULAR_POSTS='GET_POPULAR_POSTS';
export const GET_LASTEST_POSTS='GET_POSTS';

export const GET_MORE_FAST_POSTS='GET_MORE_FAST_POSTS';
export const GET_MORE_POPULAR_POSTS='GET_MORE_POPULAR_POSTS';
export const GET_MORE_LASTEST_POSTS='GET_MORE_LASTEST_POSTS';

export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const RESET_POST_DETAIL = 'RESET_POST_DETAIL'



export const getFastPosts:any = ({
  _page=1,
  ...restParams
} = {}) =>  {

  return async (dispatch:any) => {
    try {
      const response = await postApi.getFastPosts({
        _page,
        ...restParams
      })
        
      dispatch({
        type:_page===1 ? GET_FAST_POSTS : GET_MORE_FAST_POSTS,
        payload: response.data
      })
      return {
        ok:true
      } 
    } catch (error) {
      console.log('error', error)
      return {
        ok:false
      }
    }
    
  }
}

export const getPopularPosts:any = ({
  ...restParams
} = {}) =>  {

  return async (dispatch:any) => {
    try {
      const response = await postApi.getPosts({
        ...restParams
      })
        
      dispatch({
        type:GET_POPULAR_POSTS,
        payload: response.data
      }) 
    } catch (error) {
      console.log('error', error)
    }
    
  }
}

export const getLastestPosts:any = ({
  _page=1,
  _limit=6,
  ...restParams
} = {}) =>  {
  return async (dispatch:any) => {
    try {
      const response = await postApi.getPosts({
        _page,
        _limit,
        ...restParams
      })

      

      dispatch({
        type: _page === 1 ? GET_LASTEST_POSTS : GET_MORE_LASTEST_POSTS,
        payload: response.data
      }) 
    } catch (error) {
      console.log('error', error)
    }
  }
}


export function getDetailPost(postSlug:string):any {
  return async (dispatch:any) => {
    try {
      const response = await postApi.getPostDetail(postSlug);
      dispatch({
        type: GET_POST_DETAIL,
        payload: response.data[0]
      }) 
    } catch (error) {
      console.log('error', error)
    }
    
  }
}


export function createNewPost(newPost:any):any {
  return async (dispatch:any) => {
    try {
      const res = await postApi.createPost(newPost)
      
    } catch (error) {
      console.log('error', error)
    }
  }
}


export function resetPostDetail():any {
  return {
    type:RESET_POST_DETAIL
  }
}