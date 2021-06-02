import React from 'react';
import { View,Text } from 'react-native';
import FontText from '../FontText/FontText';
import { FinalLine, TglLogoContainer } from './style';
import { useNavigation } from '@react-navigation/native';


const TglLogo = () => {

    const TabNavigation = useNavigation()

    return(
        <TglLogoContainer onPress={() => TabNavigation.navigate("App")}>
            <FontText italic Weight="bold" color="#707070" size={30}>
                TGL
            </FontText>
            <FinalLine>

            </FinalLine>
        </TglLogoContainer>
    )
}

export default TglLogo;