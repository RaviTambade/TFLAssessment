import { configureStore } from "@reduxjs/toolkit";
import questionReducer from './questionReducer';

const store = configureStore({
    reducer:{
        questions: questionReducer,
    },
});

export default store;