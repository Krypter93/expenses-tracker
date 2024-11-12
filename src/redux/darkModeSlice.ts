import { createSlice } from "@reduxjs/toolkit";
import { DarkModeType } from "../types/darkModeType";

const initialState: DarkModeType = {
    value:false
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode:(state: DarkModeType) => {
            state.value = !state.value
        }
    }
})

export const { toggleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer