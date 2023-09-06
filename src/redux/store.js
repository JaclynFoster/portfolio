import {configureStore} from '@reduxjs/toolkit'
import displayModalReducer from './slices/modalSlice'


export const store = configureStore({
    reducer: {
        displayModal: displayModalReducer
    }
})