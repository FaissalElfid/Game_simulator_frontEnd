import { createStore , combineReducers , applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//!MIDDLEWARES
import thunk from 'redux-thunk';
import logger from 'redux-logger';


//!REDUCERS
import { loginReducer } from './reducers/login';
import sharedReducer from './reducers/shared';
import registerReducer from './reducers/register';
import usersReducer from './reducers/getUsers';
import challengesTypeReducer from './reducers/challenges/ChallengeType';

import challengesReducer from './reducers/challenges';

import badgesReducer from './reducers/badges';

//!REDUCER
const reducer = combineReducers({
    login : loginReducer,
    shared : sharedReducer,
    register : registerReducer,
    users: usersReducer,
    challenges: challengesReducer,
    badges: badgesReducer,
    challengesTypes: challengesTypeReducer,
})

//!APP INITIAL STATE
const initialState = {}

const middleware = [thunk , logger];

const store = createStore( reducer , initialState , composeWithDevTools(applyMiddleware(...middleware)) )


export default store;