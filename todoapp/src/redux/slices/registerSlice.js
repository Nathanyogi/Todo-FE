import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    registerDetails: {
        name: "",
        email: "",
        mobile:"",
        password: "",
        confirmPass: "",
    }
}

const registerSlice = createSlice({
    name:"registerSlice",
    initialState,
    reducers:{
        setRegisterDetails: (state, action) => {
            state.registerDetails = action.payload
        }
    }
})

export const { setRegisterDetails } = registerSlice.actions

export default registerSlice.reducer