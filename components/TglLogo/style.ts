import styled  from 'styled-components/native';


export const FinalLine = styled.View<{size:number}>`
    width: ${props => `${props.size}px`};
    height: 6px;
    background-color: ${props => props.theme.DefaultHighLight};
    border-radius: 6px;
`

export const TglLogoContainer = styled.TouchableOpacity<{size:number}>`
    width: ${props => `${props.size}px`};
    justify-content: center;
    align-items: center;
`