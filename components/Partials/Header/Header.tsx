import React from 'react';
import LogoutIcon from '../../UI/icons/logout';
import TglLogo from '../../UI/TglLogo/TglLogo';
import { HeaderContainer, MainButtonsContainer } from './style';

import CartIcon from '../../UI/icons/cartIcon';


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