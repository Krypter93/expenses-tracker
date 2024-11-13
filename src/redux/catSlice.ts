import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const catSlice = createSlice({
    name: 'category',
    initialState: '' as string,
    reducers: {
        addCategory: (state, action: PayloadAction<string>) => {
            return action.payload
        },
        cleanCategory: state => ''
    }
});

export const { addCategory, cleanCategory } = catSlice.actions
export default catSlice.reducer