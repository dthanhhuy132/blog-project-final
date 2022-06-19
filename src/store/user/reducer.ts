import { User } from '../../components/interface/user';
import {GET_ALL_USER,
  CREATE_NEW_USER,
  LOGIN,
  LOGOUT} from './action'


export interface UserState {
  currentUser: User, 
  allUser: User[], 

}

const initState = {
  currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : null,
  allUser: []
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

    case CREATE_NEW_USER:
      return state
    default:
      return state;
  }
}