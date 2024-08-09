import { AppDispatch } from "@/store";
import { accuracySlice } from "./AccuracySlice";


export const setAccuracy = (dispatch: AppDispatch, accuracy: number) => {
    try {
        dispatch(accuracySlice.actions.setAccuracy(accuracy))
    } catch {
        console.log('Error setting accuracy')
    }
}