import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    isLoggedIn:false,
    loginCredentials:{
        email:"",
        password:""
    }
}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setLoginCredentials: (state, action) => {
            state.loginCredentials = action.payload
        }
    }
})


export const login = () => (dispatch) => {
    dispatch(setIsLoggedIn(true))
}


export const { setIsLoggedIn, setLoginCredentials} = authSlice.actions

export default authSlice.reducer