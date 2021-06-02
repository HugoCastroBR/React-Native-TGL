import styled  from 'styled-components/native';


export const FinalLine = styled.View`
    width: 75px;
    height: 6px;
    background-color: ${props => props.theme.DefaultHighLight};
    border-radius: 6px;
`

export const TglLogoContainer = styled.TouchableOpacity `
    width: 80px;
    justify-content: center;
    align-items: center;
`