import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name: 'amount',
    initialState: 0,
    reducers: {
        addAmount: (state, action) => {
            state = action.payload
        }
    }
})

export const { addAmount } = amountSlice.actions
export default amountSlice.reducer