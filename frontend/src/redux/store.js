import {configureStore} from "@reduxjs/toolkit"



/**
 * 
 * Steps for state management
 * Submit Action
 * Handel Action in it's Reducer
 * Register Here -> Reducer
 */

export const store = configureStore({
    reducer : {
        auth : authReducer,
    }
})