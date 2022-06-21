import { FastPost, Pagination, Post } from '../../components/interface';
import { User } from '../../components/interface/user';
import {GET_ALL_USER,
  CREATE_NEW_USER,
  LOGIN,
  LOGOUT,
  GET_USER_LATESTPOST,
  GET_USER_POPULAR,
  GET_USER_FASTPOST,
  GET_MORE_USER_LATESTPOST,
  GET_MORE_USER_POPULAR,
  GET_MORE_USER_FASTPOST,
  RESET_POST} from './action'


export interface UserState {
  currentUser: User, 
  allUser: User[], 
  userPosts: {
    lastestPosts: {
      data: Post[],
      pagination: Pagination | null
    },
    popularPosts:{
      data: Post[],
      pagination: Pagination | null
    },
    fastPosts:{
      data: [],
      pagination: Pagination | null
    },
  }
}

const initState = {
  currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : null,
  allUser: [],
  userPosts: {
    lastestPosts: {
      data: [],
      pagination: null
    },
    popularPosts: {
      data: [],
      pagination: null
    },
    fastPosts: {
      data: [],
      pagination: null
    }
  }
}

export default function userReducer(state=initState, action:any) {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        allUser: action.payload
      };
  
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload
      };   
    case LOGOUT:
      localStorage.removeItem('user')
      return {
        ...state,
        currentUser: null
      }; 
    // _____________________________________________________CREATE NEW USER
    case CREATE_NEW_USER:
      return state
    
      // _____________________________________________________________________ lastest post
    case GET_USER_LATESTPOST:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          lastestPosts: {
            data: action.payload.data,
            pagination: action.payload.pagination
          }
        }
      }
    
    case GET_MORE_USER_LATESTPOST:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          lastestPosts: {
            data: [...state.userPosts.lastestPosts.data, ...action.payload],
            pagination:action.payload.pagination
          }
        }
      }  
    // _____________________________________________________________________ popular post
    case GET_USER_POPULAR:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          popularPosts: {
            data: action.payload.data,
            pagination: action.payload.pagination
          }
        }
      }
    
    case GET_MORE_USER_POPULAR:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          popularPosts: {
            data: [...state.userPosts.popularPosts.data, ...action.payload.data],
            pagination: action.payload.pagination
          }
        }
      }  
      // _____________________________________________________________________ fast post
    case GET_USER_FASTPOST:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          fastPosts: {
            data: action.payload.data,
            pagination: action.payload.pagination
          }
        }
      }
    
    case GET_MORE_USER_FASTPOST:
      return {
        ...state,
        userPosts: {  
          ...state.userPosts,
          fastPosts: {
            data: [...state.userPosts.fastPosts.data, ...action.payload],
            pagination: action.payload.pagination
          }
        }
      }     
    
      // _____________________________________________________________________ reset post
    case RESET_POST:
      console.log('chay vao reset post ne')
    return {
      ...state,
      userPosts: {
        lastestPosts: {
          data: [],
          pagination: null
        },
        popularPosts: {
          data: [],
          pagination: null
        },
        fastPosts: {
          data: [],
          pagination: null
        }
      }
    } 
    
    default:
      return state;
  }
}