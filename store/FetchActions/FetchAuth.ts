/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobalErrorLoad, useSuccessLoad } from "../../hooks/useLoad";
import api from "../../services/api";
import setStorage, { removeStorage } from "../../services/AsyncStorage";
import { SavedGame, UpdateInfos } from "../../types/";
import { AuthLogout,  SetLoading, SetLoadingSuccess, SetRecentGames, SetUser, UsersResetRegisterSuccess } from "../actions";
import { AuthSetMessage, AuthLogin, UsersRegisterSuccess } from "./../actions";
import { useErrorLoad } from './../../hooks/useLoad';
import { getStorage } from './../../services/AsyncStorage';




export const tryAuth = (email: string, password: string) => {
	// pass email and password to API ant try to get the token
	const body = {
		email,
		password,
	};

	return (dispatch: any) => {
		dispatch(SetRecentGames([]))
		api.post("/auth", body)
			.then((res) => {
				removeStorage('token').then(
					() => {
						setStorage('token',res.data.token).then(() => {
						
							dispatch(SetRecentGames([] as SavedGame[]))
							dispatch(AuthLogin(true));
							useSuccessLoad()
						
						})
					}
				
				)
				


			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				

				if (err?.response?.status === 401) {
					useErrorLoad()
					dispatch(AuthSetMessage("Invalid User", "red"));
				} else {
					useGlobalErrorLoad()
				}
				
			});
	};
};

export const tryRegister = (
	username: string,
	email: string,
	password: string,
	password_confirmation: string,
) => {
	// Try to post a new user to API
	const body = {
		username,
		email,
		password,
		password_confirmation,
	};

	return (dispatch: any) => {
		api.post("/register", body)
			.then(() => {
				
				dispatch(UsersRegisterSuccess());
				useSuccessLoad()

			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				dispatch(AuthLogin(false));
				
				if (err?.response?.status === 401) {

					useErrorLoad()
					dispatch(AuthSetMessage("Invalid User!", "red"));
				} else if (err?.response?.status === 400) {

					dispatch(
						AuthSetMessage(
							`${err.response.data[0].message == undefined ? err.response.data : err.response.data[0].message}`,
							"red",
						),
					);
				} else {

					useGlobalErrorLoad()
					dispatch(AuthSetMessage("Error", "red"));
				}
			});
	};
};

export const tryResetPassword = (email: string) => {
	// Try to get a token to reset password and send to user email
	const body = {
		email,
	};

	return (dispatch: any) => {
		api.post("/reset-password", body)
			.then(() => {

				dispatch(
					AuthSetMessage(
						"A recover email had been sent to your email",
						"green",
					),
				);
				useSuccessLoad()
				// dispatch(AuthLogin(true));
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				if (
					err.response.status === 401 ||
					err.response.status === 404
				) {
					useErrorLoad()
					dispatch(AuthSetMessage("Invalid Email", "red"));
				} else if (err.response.status === 400) {
					useErrorLoad()
					dispatch(
						AuthSetMessage(
							`${err.response.data[0].message}`,
							"red",
						),
					);
				} else {
					useGlobalErrorLoad()
					dispatch(AuthSetMessage("Error", "red"));
				}
			});
	};
};

export const tryUpdatePassword = (
	password: string,
	password_confirmation: string,
	token: string,
) => {
	// Try to update the password

	const body = {
		password,
		password_confirmation,
		token,
	};

	return (dispatch: any) => {
		api.put("/reset-password", body)
			.then(() => {
				dispatch(UsersRegisterSuccess());
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				if (err.response.status === 404) {
					dispatch(AuthSetMessage(`Expired Token`, "red"));
				} else {
					dispatch(AuthSetMessage("Error", "red"));
				}
			});
	};
};

export const getUserInfos = () => {
	// get the user infos

	const token = getStorage("token");
	if (typeof token === "string") {
	
		api.defaults.headers.Authorization = `Bearer ${token}`;
		return (dispatch: any) => {
			api.get("/user")
				.then(() => {
					dispatch(UsersRegisterSuccess());
				})
				.catch((err) => {
					dispatch(AuthLogin(false));
					if (err.response.status === 404) {
						dispatch(AuthSetMessage(`Expired Token`, "red"));
					} else {
						dispatch(AuthSetMessage("Error", "red"));
					}
				});
		};
	} else {
		return (dispatch: any) => {
			dispatch(UsersResetRegisterSuccess());
		};
		// redirect to login
	}
};

export const UpdateProfile = (Infos: UpdateInfos) => {
	// eslint-disable-next-line prefer-const
	let Body: any = { ...Infos };
	
	Object.entries(Infos).forEach((e) => {
		if (!e[1] || e[1]?.length < 2) {
			delete Body[e[0]];
		}
	});


	
	return (dispatch: any) => {
		getStorage("token").then((token) => {

			api.defaults.headers.Authorization = `Bearer ${token}`;
			api.put("/update-user", Body)
			.then(() => {
				dispatch(AuthSetMessage("Success", "green"));
				dispatch(UsersRegisterSuccess());
				useSuccessLoad()
			})
			.catch((err) => {
				// 
				useErrorLoad()
				dispatch(
					AuthSetMessage(
						`${err?.response?.data[0]?.message.replace("_"," ")}`,
						"red",
					),
				);
			});
		})
		.catch(() => {
			
			useGlobalErrorLoad()
		})
		
	};
}



export const FetchUser = () => {
	return (dispatch:any) => {
		getStorage("token").then(
			(token) => {
				if (typeof (token) === "string") {
					api.defaults.headers.Authorization = `Bearer ${token}`
					api.get("/user")
						.then((res) => {
							dispatch(SetUser({ ...res.data[0] }))
							
							useSuccessLoad()
						})
						.catch(() => {
							
							useGlobalErrorLoad()
						});
				}
			}
		)
	}
}


export const FetchLogout = () => {
	return (dispatch: any) => {
		removeStorage("token").then(() => {
			
			dispatch(SetLoadingSuccess(false))
			dispatch(SetLoading(false))
			dispatch(AuthLogout)
		})
		
	}
	
}