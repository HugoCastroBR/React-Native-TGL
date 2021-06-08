import styled  from 'styled-components/native';


export const NumberBtn = styled.TouchableOpacity<{selected:boolean,color:string}>`
    height: 56px;
    width: 56px;
    background-color: ${props => `${props.selected ? props.color : "#ADC0C4"}`};
    border-radius: 56px;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
    margin-left: 0.6%;
    margin-right: 0.6%;
`