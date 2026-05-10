import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : null,
    isLoading : false,
}

const auhtSlice = createSlice({
    name : "auth",
    initialState,
    
})