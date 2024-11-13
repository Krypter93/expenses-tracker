import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const titleSlice = createSlice({
    name: 'title',
    initialState: '' as string,
    reducers: {
        addTitle: (state, action: PayloadAction<string>) => {
            return action.payload
        },
        cleanTitle: state => ''
    }
});

export const { addTitle, cleanTitle } = titleSlice.actions
export default titleSlice.reducer