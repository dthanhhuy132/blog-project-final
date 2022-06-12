import { GET_CATEGORY } from "./action";

const initState = {
  
}


export default function categoryReducer(state =initState, action:any) {
  switch (action.type) {
    case GET_CATEGORY:
      return action.payload;
    
    default:
      return state;
  }
}