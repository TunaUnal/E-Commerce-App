import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import productSlice from "./products";
import cardSlice from "./card";

export default configureStore({
    reducer: {
       counter: counterReducer,
       products:productSlice,
       card:cardSlice
    }
});