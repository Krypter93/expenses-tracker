import { createSlice } from "@reduxjs/toolkit"

const catSlice = createSlice({
    name: 'category',
    initialState: '',
    reducers: {
        addCategory: (state, action) => {
            state = action.payload
        }
    }
});

export const { addCategory } = catSlice.actions
export default catSlice.reducer