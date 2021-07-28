import { createStore , combineReducers , applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//!MIDDLEWARES
import thunk from 'redux-thunk';
import logger from 'redux-logger';


//!REDUCERS
import { test1Reducer } from './reducers/test1';
import { testFollowReducer } from './reducers/testFollow';
import { testUnfollowReducer } from './reducers/testUnfollow';


//!REDUCER
const reducer = combineReducers({
    test1 : test1Reducer,
    testFollow : testFollowReducer,
    testUnfollow : testUnfollowReducer,
})

//!APP INITIAL STATE
const initialState = {}

const middleware = [thunk , logger];

const store = createStore( reducer , initialState , composeWithDevTools(applyMiddleware(...middleware)) )


export default store;