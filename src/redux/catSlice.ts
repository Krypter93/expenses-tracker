import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const catSlice = createSlice({
    name: 'category',
    initialState: '' as string,
    reducers: {
        addCategory: (_state, action: PayloadAction<string>) => {
            return action.payload
        },
        cleanCategory: () => ''
    }
});

export const { addCategory, cleanCategory } = catSlice.actions
export default catSlice.reducer