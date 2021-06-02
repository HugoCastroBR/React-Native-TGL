import React from 'react';
import { View, Button,Text } from 'react-native';
import LogoutIcon from '../../icons/logout';
import TglLogo from '../../TglLogo/TglLogo';
import { HeaderContainer, MainButtonsContainer } from './style';

import CartIcon from './../../icons/cartIcon';

const Header = ({navigation}:{navigation?:any}) => {
    return (
        <HeaderContainer >
            <TglLogo/>
            <MainButtonsContainer> 
                {navigation && <CartIcon navigation={navigation}/>}
                <LogoutIcon/>
                
            </MainButtonsContainer>
        </HeaderContainer>
    )
}

export default Header;