import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayloadType } from "../types/payloadType";

const initialState: PayloadType[] = JSON.parse(localStorage.getItem('expenses') || '[]')

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addInfo: (state, action: PayloadAction<PayloadType>) => {
            state.push(action.payload)
            localStorage.setItem('expenses', JSON.stringify(state)) 
        }
    }
})

export const { addInfo} = dataSlice.actions
export default dataSlice.reducer