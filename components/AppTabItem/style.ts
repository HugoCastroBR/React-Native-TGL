import styled  from 'styled-components/native';


export const AppTabItemContainer = styled.View`

    height: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 10px;
`

export const TopBarSelected = styled.View`
    width: 32px;
    height: 4px;
    background-color: ${props => props.theme.DefaultHighLight};
    border-radius: 6px;
    margin-bottom: 5px;

`

export const DefaultIconContainer = styled.View`
    height: 32px;
    justify-content: center;
`