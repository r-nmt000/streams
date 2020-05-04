import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducers from "./streamReducers";

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducers
});

export default reducers;