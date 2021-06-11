import React from 'react';
import LogoutIcon from '../../icons/logout';
import TglLogo from '../../TglLogo/TglLogo';
import { HeaderContainer, MainButtonsContainer } from './style';

import CartIcon from './../../icons/cartIcon';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
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