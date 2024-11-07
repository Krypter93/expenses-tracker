import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        title: '',
        category: '',
        amount: 0
    },
    reducers: {
        addInfo: (state, action) => {
            state.title = action.payload.title
            state.category = action.payload.category
            state.amount = action.payload.amount
            localStorage.setItem('expenses', JSON.stringify(state))
        }
    }
})

export const { addInfo} = dataSlice.actions
export default dataSlice.reducer