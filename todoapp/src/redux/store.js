import {
    configureStore
} from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import authSlice from './slices/authSlice'
import registerSlice from './slices/registerSlice'

export const store  = configureStore({
    reducer:{
        userSlice,
        authSlice,
        registerSlice
    }
})