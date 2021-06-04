import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import FontText from '../FontText/FontText';
import AccountIcon from '../icons/AccountIcon';
import HomeIcon from '../icons/HomeIcon';
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