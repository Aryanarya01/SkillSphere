import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : null,
    isLoading : false,
}

const auhtSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {

        //login
        setUser : (state, action)=>{
            state.user = action.payload;
        },


        //logout
        logoutUser : (state)=>{
            state.user = null;
        },


        



    }
})