import { createSlice } from "@reduxjs/toolkit";
import { ISheetState } from "../state/ISheetState";

const initialState: ISheetState = {
    sheetState: []
}

const sheetSlice = createSlice({
    name: 'sheetSlice',
    initialState,
    reducers: {
        updateSheetState: (state, action) => {
            state.sheetState = action.payload
        }
    }
})

export const { updateSheetState} = sheetSlice.actions

export default sheetSlice.reducer