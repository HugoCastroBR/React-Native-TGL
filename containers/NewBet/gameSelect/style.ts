import styled from 'styled-components/native';
import { GameSelectButtonType } from '../../../types';


export const GameSelectButton = styled.TouchableOpacity<GameSelectButtonType>`

    color: ${(props) => {
        if (props.active) {
            return `white`
        } else {
            return `${props.color ? props.color : 'gray'}`
        }
    }};
    width: 110px;
    height: 35px;
    border: 2px solid ${(props) => `${props.color ? props.color : 'gray'}`};
    border-radius: 100px;
    background-color: ${(props) => `${props.active ? props.color : 'transparent'}`};
    margin-right: 10px;
    justify-content: center;
    align-items: center;

`

// export const GameSelectContainer = styled.ScrollView`

//     flex-direction: row;
//     justify-content: space-around;
//     height: 35px;
    
// `