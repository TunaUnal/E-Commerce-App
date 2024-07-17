import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import productSlice from "./products";

export default configureStore({
    reducer: {
       counter: counterReducer,
       products:productSlice
    }
});