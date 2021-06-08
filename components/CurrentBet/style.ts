import styled from "styled-components/native";


export const CurrentBetContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.8);
    width:100%;
    opacity: 1;
    z-index: 20;
`

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

export const CurrentNumbersContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 12px;
    flex-wrap: wrap;
    

`

export const CurrentNumber = styled.View`
    background-color: red;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    margin-bottom: 12px;
    
`


export const DeleteNumber = styled.TouchableOpacity`
    position: absolute;
    /* margin-left: 16px;
    margin-top: -10px;
    margin-bottom: -10px; */
    top: 0;
    right: 8px;
`

export const EndContainer = styled.View`
    margin-top: 8px;
    width: 100%;
    height: 10px;
    justify-content: center;
    align-items: center;

`

export const EndItem = styled.TouchableOpacity`
    width: 36px;
    height: 6px;
    background-color: gray;
    border-radius: 6px;
`

export const TitleContainer = styled.View`

    margin-bottom: 28px;

`
export const GameSelectorContainer = styled.View`

    margin-bottom: 28px;
`

export const GameRulesDesc = styled.View`
    margin-top: 24px;
    margin-bottom: 8px;

`

export const GameOptionsContainer = styled.View`
    flex-direction: row;
    width: 92%;
    margin-left: 4%;
    justify-content: space-between;
    align-items: center;
`

export const GameOptionBtn = styled.TouchableOpacity<{Highlight?:boolean}>`
    background-color: ${(props) => `${props.Highlight? "#B5C401":"transparent"}`};
    border-width: 1px;
    border-color: #B5C401;
    border-radius: 4px;
    height: 32px;
    width: 112px;
    justify-content: center;
    align-items: center;   
`