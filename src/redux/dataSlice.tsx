import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataState } from "../types/dataType";
import { PayloadType } from "../types/payloadType";

const initialState: DataState = {
    title: '',
    category: '',
    amount: ''
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addInfo: (state, action: PayloadAction<PayloadType>) => {
            const current = JSON.parse(localStorage.getItem('expenses') || '[]')
            const update = [...current, action.payload]
            localStorage.setItem('expenses', JSON.stringify(update))
            
            return {...state,
                    title: action.payload.title,
                    category: action.payload.category,
                    amount: action.payload.amount
            }
              
        }
    }
})

export const { addInfo} = dataSlice.actions
export default dataSlice.reducer