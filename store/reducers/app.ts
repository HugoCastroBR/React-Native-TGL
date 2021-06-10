import { createSlice } from "@reduxjs/toolkit";


export const AppSlice = createSlice({
	name: "AppSlice",
	initialState: {
		// User: {} as UserProps,
		isLoading: false,
		isGlobalError: false,
		isLoadingSuccess: false,
		nextPage: ''
	},
	reducers: {
        SET_LOADING(state,{payload}:{payload:boolean}){
            state.isLoading = payload
        },
		SET_GLOBAL_ERROR(state,{payload}:{payload:boolean}){
            state.isGlobalError = payload
        },
		SET_LOADING_SUCCESS(state,{payload}:{payload:boolean}){
            state.isLoadingSuccess = payload
        },
		SET_NEXT_PAGE(state,{payload}:{payload:string}){
			state.nextPage = payload
		}
	},

});
1