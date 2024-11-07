import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name: 'amount',
    initialState: '',
    reducers: {
        addAmount: (state, action: PayloadAction<string>) => {
            return action.payload
        }
    }
})

export const { addAmount } = amountSlice.actions
export default amountSlice.reducer