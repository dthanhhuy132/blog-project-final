import { FastPost, Pagination, Post } from "../../components/interface"
import { GET_LASTEST_POSTS, GET_FAST_POSTS, GET_POPULAR_POSTS, GET_MORE_LASTEST_POSTS, GET_POST_DETAIL, GET_MORE_FAST_POSTS, GET_RELATED_POST, RESET_POST_DETAIL, ADD_NEW_POST } from "./action"


export interface IPostReducer {
  fastPosts: {
    data: FastPost[],
    pagination: Pagination
  },
  lastestPosts: {
    data: {
      top3: Post[],
      restPosts: Post[]
    },
    pagination: Pagination
  },
  populartPosts: {
    data: {
      right: Post[],
      left: Post[]
    },
    pagination: Pagination
  },
  postDetail: Post | null;
  relatedPosts: Post[]
}

const initState:IPostReducer = {
  fastPosts: {
    data: [],
    pagination:{
      _page: 1,
      _limit:10,
      _totalRows:10
    }
  },
  lastestPosts: {
    data: {
      top3: [],
      restPosts:[]
    },
    pagination: {
      _page: 1,
      _limit:10,
      _totalRows:10
    }
  },
  populartPosts: {
    data: {
      right: [],
      left:[]
    },
    pagination: {
      _page: 1,
      _limit:10,
      _totalRows:10
    }
  },
  postDetail: null,
  relatedPosts:[]
}

export default function postReducer(state = initState, action: any) {
  switch (action.type) {
    case GET_FAST_POSTS:
      return {
        ...state,
        fastPosts: {
          data: action.payload.data,
          pagination: action.payload.pagination
        }
      }

    case GET_MORE_FAST_POSTS:
      return {
        ...state,
        fastPosts: {
          data: [...state.fastPosts.data, ...action.payload.data],
          pagination: action.payload.pagination
        }
      }

      case GET_POPULAR_POSTS:
      return {
        ...state,
        populartPosts: {
          data: {
            left: action.payload.data.slice(0,1),
            right: action.payload.data.slice(1,4)
          },
          pagination: action.payload.pagination
        }
      }


      case GET_LASTEST_POSTS:
        return {
          ...state,
          lastestPosts: {
            data: {
              top3:action.payload.data.slice(0,2),
              restPosts:action.payload.data.slice(2,6)
            },
            pagination: action.payload.pagination
          }
        }

      case GET_MORE_LASTEST_POSTS:
        return {
          ...state,
          lastestPosts: {
            data: {
              ...state.lastestPosts.data,
              restPosts:[...state.lastestPosts.data.restPosts, ...action.payload.data]
            },
            pagination: action.payload.pagination
          }
        }

        case GET_POST_DETAIL:
        return {
          ...state,
          postDetail: action.payload
        }

        // case ADD_NEW_POST:
      
        //   return {
        //     ...state,
        //     lastestPosts: {
        //       ...state.lastestPosts,
        //       data: {
        //         top3: [...action.payload,...state.lastestPosts.data.top3].slice(0,2),
        //         restPosts: [...state.lastestPosts.data.top3,...state.lastestPosts.data.top3].slice(1,5)
        //       }
        //     }
        //   }


        case GET_RELATED_POST:

          let combineData = [...state.relatedPosts, ...action.payload.data]
          
          let newPostData = combineData.filter((value:Post, index:number, self:Post[]) => {
            return self.findIndex((item:Post) => item.id === value.id) === index;
          })
        
          return {
            ...state,
            relatedPosts: combineData
          }

        case RESET_POST_DETAIL:
          return {
            ...state,
            postDetail: null,
            relatedPosts:[]
          }


          
    default:
      return state;
  }
}