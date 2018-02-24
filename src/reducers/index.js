import { combineReducers } from "redux";
import { signInReducer } from "./signin";
import { signUpReducer } from './signup';

export default combineReducers({
    loginStatus: signInReducer,
    signUpData: signUpReducer
});

