import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {categoriesReducer} from "./slice/slice";

const rootReducer = combineReducers({
   categories:categoriesReducer,
    teachers:categoriesReducer
});

const setupStore =()=> configureStore({
    reducer:rootReducer,
});
export {setupStore}