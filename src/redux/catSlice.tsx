import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const catSlice = createSlice({
    name: 'category',
    initialState: '' as string,
    reducers: {
        addCategory: (state, action: PayloadAction<string>) => {
            return action.payload
        }
    }
});

export const { addCategory } = catSlice.actions
export default catSlice.reducer