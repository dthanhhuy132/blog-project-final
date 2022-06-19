import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import categoryReducer from './category/reducer';
import postReducer from './posts/reducer';
import userReducer from './user/reducer';

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  Posts: postReducer,
  Category: categoryReducer,
  User: userReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// const middleware = applyMiddleware(thunk);

export default store