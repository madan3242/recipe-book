import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users/user.reducer";

let rootReducer = combineReducers({
    userData: userReducer,
});

export { rootReducer };