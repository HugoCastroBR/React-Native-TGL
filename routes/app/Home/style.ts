import styled from "styled-components/native";


export const RecentGamesTitle = styled.View`
	width: 100%;

	align-items: center;
	justify-content: space-between;


	
`;

export const FiltersContainer = styled.View`
	width: 100%;
    padding-left: 12px;
	justify-content: flex-start;
	align-items: center;
	align-items: flex-start;
	justify-content: flex-start;
`;



export const HomeContainer = styled.View`
	width: 100%;
	max-width: 1200px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 26px;
    
`;

export const RecentGamesContainer = styled.View`

	width: 100%;
	flex-direction: column;
	align-items: flex-start;
	height: auto;
	margin-top: 26px;
    padding-left: 2px;
    padding-bottom: 90px;
`;

export const EmptyRecentGames = styled.View`
	margin-top: 12px;
	font: italic normal normal 22px "Helvetica Neue Medium";
	letter-spacing: 0px;
	color: #868686;
`;

export const FilterTitleContainer = styled.View`
    margin-top: 14px;
    margin-bottom: 14px;
`