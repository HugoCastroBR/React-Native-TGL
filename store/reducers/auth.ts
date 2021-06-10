import { createSlice } from "@reduxjs/toolkit";
import { removeStorage } from "../../services/AsyncStorage";


export const AuthSlice = createSlice({
	name: "AuthSlice",
	initialState: {
		// User: {} as UserProps,
		isAuth: false,
        message: "",
		messageColor: "red",
		RegisterSuccess: false,
		NewAndValidEmail: false
	},
	reducers: {
		AUTH_USER(state,{payload}:{payload:boolean}) {

			state.isAuth = payload
			
		},
		LOGOUT(state) {
			state.isAuth = false;
			
		},
		SET_MESSAGE(state,{payload}:{payload:{message:string,messageColor:string}}){
			state.message = payload.message
			state.messageColor = payload.messageColor
		},
		REGISTER_USER_SUCCESS(state) {
				state.RegisterSuccess = true
		},
		RESET_SUCCESS(state){
			state.RegisterSuccess = false
			state.NewAndValidEmail = false
		}

	},

});
