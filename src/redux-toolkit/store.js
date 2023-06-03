import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slices/firstSlice'

export const store = configureStore({
    reducer: {
        countReducer,
    },
})