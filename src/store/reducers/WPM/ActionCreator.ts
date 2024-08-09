import { AppDispatch } from "@/store"
import { wpmSlice } from "./WPMSlice"


export const setWPM = (dispatch: AppDispatch, wpm: number) => {
    try {
        dispatch(wpmSlice.actions.setWPM(wpm))
    } catch {
        console.log('Error setting WPM')
    }
}