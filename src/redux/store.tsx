import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./dataSlice"
import titleSliceReducer from "./titleSlice"
import catSliceReducer from "./catSlice"
import amountSliceReducer from "./amountSlice"

const store = configureStore({
    reducer: {
        data: dataSliceReducer,
        title: titleSliceReducer,
        category: catSliceReducer,
        amount: amountSliceReducer
    }
})

export default store