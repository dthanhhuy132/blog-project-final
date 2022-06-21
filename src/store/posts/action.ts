import { bindActionCreators } from "redux";
import { Post } from "../../components/interface";
import postApi from "../../services/postApi";

export const GET_FAST_POSTS='GET_FAST_POSTS';
export const GET_POPULAR_POSTS='GET_POPULAR_POSTS';
export const GET_LASTEST_POSTS='GET_POSTS';

export const GET_MORE_FAST_POSTS='GET_MORE_FAST_POSTS';
export const GET_MORE_POPULAR_POSTS='GET_MORE_POPULAR_POSTS';
export const GET_MORE_LASTEST_POSTS='GET_MORE_LASTEST_POSTS';

export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const GET_RELATED_POST = 'GET_RELATED_POST';

export const ADD_NEW_POST = 'ADD_NEW_POST';
export const EDIT_POST = 'EDIT_POST'

export const RESET_POST_DETAIL = 'RESET_POST_DETAIL';


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
  _sort='love',
  ...restParams
} = {}) =>  {

  return async (dispatch:any) => {
    try {
      const response = await postApi.getPosts({
        _sort,
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

export const getRelatedPost:any = ({_limit=5, ...restParams } ={}) => {
  console.log({restParams})
  return async (dispatch:any) => {
    try {
      const response = await postApi.getPosts({_limit, ...restParams})
      return dispatch({
        type:GET_RELATED_POST,
        payload:response.data
      })
    } catch (error) {
      console.log('Error', error )
    }
  }
}


export function createNewPost(newPost:any):any {
  return async (dispatch:any) => {
    try {
      const res = await postApi.createPost(newPost)
      dispatch(getLastestPosts())

      
     
      return {
        ok: true,
        data: res.data
      }
    } catch (error) {
      console.log('error', error)
      return {
        ok: false,
      }
    }
  }
}


export function editPost(editPost:any):any {
  return async (dispatch:any) => {
    try {
      const res = await postApi.udpatePost(editPost) 
      console.log('edit post tra ve la gi', res.data)
      dispatch(getLastestPosts())
      dispatch(getPopularPosts({ love_gte: 1 }))
      return {
        ok:true,
        data: res.data
      }
    } catch (error) {
      return {
        ok:false
      }
    }
  }
}


export function resetPostDetail():any {
  return {
    type:RESET_POST_DETAIL
  }
}