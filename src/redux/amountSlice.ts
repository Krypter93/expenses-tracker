import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name: 'amount',
    initialState: '',
    reducers: {
        addAmount: (state, action: PayloadAction<string>) => {
            return action.payload
        },
        cleanAmount: state => ''
    }
})

export const { addAmount, cleanAmount } = amountSlice.actions
export default amountSlice.reducer