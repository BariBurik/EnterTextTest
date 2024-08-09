import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WPMState {
    wpm: number
}

const initialState: WPMState = {
    wpm: 0
}

export const wpmSlice = createSlice({
    name: 'Wpm',
    initialState,
    reducers: {
        setWPM: (state: WPMState, action: PayloadAction<number>) => {
            state.wpm = action.payload
        }
    }
})

export default wpmSlice.reducer