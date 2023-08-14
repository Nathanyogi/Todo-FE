import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:{
        name:"Nathan",
        email:"nathan@gmail.com",
        password:""
    },
    isLoggedIn:false,
}

const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        setUserDetails : (state, action) => {
            state.userDetails = action.payload
            
        },
        setIsloggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const { setUserDetails, setIsloggedIn } = userSlice.actions

export default userSlice.reducer