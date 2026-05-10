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


        //Loading
        setLoading : (state,action)=>{
            state.isLoading = action.payload;
        },


    }
})


export const {setUser, logoutUser, setLoading} = auhtSlice.actions;
export default