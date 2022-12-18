import {
     applyMiddleware,
     combineReducers,
     compose,
     legacy_createStore,
} from "redux";
import thunk from "redux-thunk";

import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { cartReducer } from "./CartReducer/reducer";

const rootReducer = combineReducers({ AppReducer, AuthReducer, cartReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
     rootReducer,
     composeEnhancers(applyMiddleware(thunk))
);

export { store };
