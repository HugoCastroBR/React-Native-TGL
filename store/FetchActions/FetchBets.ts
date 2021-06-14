/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../../services/api";
import { SavedGame } from "../../types";
import { SetRecentGames } from "../actions";
import { getStorage } from "./../../services/AsyncStorage";
import useStartingLoad, { useSuccessLoad } from './../../hooks/useLoad';

export const getUserBets = () => {
	// Get the user bets of the API

	return (dispatch: any) => {
		useStartingLoad('Home')
		getStorage("token").then((token) => {
			api.defaults.headers.Authorization = `Bearer ${token}`;
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			
			api.get("/user-bets/0	", config)
				.then((res) => {
					let NewData = res.data.map((e: any) => {
						if (typeof e.numbers === "string") {
							let NewNumbers = e.numbers.split(",");
							NewNumbers = NewNumbers.map((e: string) =>
								Number(e),
							);
							const NewE = { ...e, numbers: NewNumbers };
							return NewE;
						} else {
							return e;
						}
					});

					NewData = NewData.map((element: any) => {
						const NewE: SavedGame = {
							numbers: element.numbers,
							price: Number(element.game.price),
							color: element.game.color,
							type: element.game.type,
							data: element.created_at,
							active: false,
						};
						return NewE;
					});

					const FinalData: SavedGame[] = [...NewData];
					
					
					dispatch(SetRecentGames(FinalData));
					useSuccessLoad()
				})
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				.catch(() => {});
		});
	};
};

export interface SaveBets {
	numbers: number[];
	game_id: number;
}

export const addToUserBets = (Bets: SaveBets[]) => {
	// Add a new bet to User Bets

	const BetsToSave = Bets.map((e) => {
		return { ...e, numbers: e.numbers.join(",") };
	});

	const body = {
		bets: BetsToSave,
	};

	getStorage("token").then((token) => {
		api.defaults.headers.Authorization = `Bearer ${token}`;
		api.post("/bets", body)
		.then((res) => {
			return res.data;
		})
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		.catch(() => {});
	}) 
	
};
