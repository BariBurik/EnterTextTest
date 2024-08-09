import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import wpmReducer from "./reducers/WPM/WPMSlice"
import accuracyReducer from "./reducers/Accuracy/AccuracySlice";

// объединяя reducer-ы с помощью combineReducers, мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    wpmReducer,
    accuracyReducer
})

// непосредственно создаём store
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']