import styled  from 'styled-components/native';
import { GameSelectButtonType, SavedGame } from '../../types';


export const RecentGameItemStyle = styled.View<GameSelectButtonType>`

    
    width: 100%;
    height: auto;
    margin-left: 12px;
    justify-content: space-around;
    



    
`

export const RecentGameItemContainer = styled.View`
    margin-top: 18px;
    width: 86%;
    margin-left: 28px;
    flex-direction: row;
`

export const PreBar = styled.View<GameSelectButtonType>`
    margin-left: -20px;
    width: 6px;
    height: auto;
    background-color: ${props =>`${props.color && props.color}`};
    border-radius: 100px;
`

