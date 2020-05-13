import {applyMiddleware, createStore} from "redux";

import rootReducer from './root.reducer';

const middlewares = [];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;