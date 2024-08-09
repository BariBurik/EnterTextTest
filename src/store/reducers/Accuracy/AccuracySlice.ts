import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface AccuracyState {
    accuracy: number
}

const initialState: AccuracyState = {
    accuracy: 0
}

export const accuracySlice = createSlice({
    name: 'Accuracy',
    initialState,
    reducers: {
        setAccuracy: (state: AccuracyState, action: PayloadAction<number>) => {
            state.accuracy = action.payload
        }
    }
})

export default accuracySlice.reducer