import { configureStore } from "@reduxjs/toolkit"
import { GameSlice } from './reducers/game';
import { AuthSlice } from './reducers/auth';
import { AppSlice } from "./reducers/app";

const store = configureStore({
    reducer:{
        Game: GameSlice.reducer,
        Auth: AuthSlice.reducer,
        App: AppSlice.reducer
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>

export const GameActions = GameSlice.actions
export const AuthActions = AuthSlice.actions
export const AppActions = AppSlice.actions
