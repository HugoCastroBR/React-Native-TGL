import React from 'react';
import styled  from 'styled-components/native';


export const HeaderContainer = styled.View`
    height: 100px;
    padding: 20px 20px 0px 20px;
    background-color: ${props => props.theme.BgLight};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const MainButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
    
`