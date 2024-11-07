import { createSlice } from "@reduxjs/toolkit"

const titleSlice = createSlice({
    name: 'title',
    initialState: '',
    reducers: {
        addTitle: (state, action) => {
            state = action.payload
        }
    }
});

export const { addTitle } = titleSlice.actions
export default titleSlice.reducer