import { combineReducers } from "redux";
import { routerStateReducer } from "redux-router";

import contests from "reducers/contests";

const rootReducer = combineReducers({
    router: routerStateReducer,
    contests
});

export default rootReducer;
