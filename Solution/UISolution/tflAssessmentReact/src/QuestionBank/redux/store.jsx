import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionreducer";

const store = configureStore({
    reducer:{
        questions: questionReducer,
    },
});

export default store;