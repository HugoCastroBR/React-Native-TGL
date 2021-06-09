import { createSlice } from "@reduxjs/toolkit";


export const AppSlice = createSlice({
	name: "AppSlice",
	initialState: {
		// User: {} as UserProps,
		isLoading: false,

	},
	reducers: {
        SET_LOADING(state,{payload}:{payload:boolean}){
            state.isLoading = payload
        }
	},

});
