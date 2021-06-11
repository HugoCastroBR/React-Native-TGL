import React from 'react';

import FontText from '../UI/FontText/FontText';
import { AppTabItemContainer, DefaultIconContainer, TopBarSelected } from './style';


const AppTabItem = ({
    focused,
    icon,
    title=""
}
    :{
        focused:boolean,
        icon:JSX.Element
        title?: string
}) => {

    return (
        <AppTabItemContainer>
            {focused && <TopBarSelected/>}
            <DefaultIconContainer>
                {icon}
            </DefaultIconContainer>
            <FontText italic Weight='bold' color="#707070" size={14}>{title}</FontText>
        </AppTabItemContainer>
    )
}

export default AppTabItem;