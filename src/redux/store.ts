import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./dataSlice"
import titleSliceReducer from "./titleSlice"
import catSliceReducer from "./catSlice"
import amountSliceReducer from "./amountSlice"
import darkModeReducer from "./darkModeSlice"

const store = configureStore({
    reducer: {
        data: dataSliceReducer,
        title: titleSliceReducer,
        category: catSliceReducer,
        amount: amountSliceReducer,
        darkMode: darkModeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store