import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import categoryReducer from './category/reducer';
import postReducer from './posts/reducer';

const rootReducer = combineReducers({
  Posts: postReducer,
  Category: categoryReducer
})


const middleware = applyMiddleware(thunk);
const store = createStore( rootReducer, middleware)

export default store