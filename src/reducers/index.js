import { combineReducers } from "redux";
import { signInReducer } from "./signin";
import { signUpReducer } from './signup';
import { challengesReducer } from './challenges';

export default combineReducers({
    loginData: signInReducer,
    signUpData: signUpReducer,
    challengesData: challengesReducer
});

