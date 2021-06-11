import React from 'react';
import FontText from '../FontText/FontText';
import { FinalLine, TglLogoContainer } from './style';
import { useNavigation } from '@react-navigation/native';


const TglLogo = ({size=1}:{size?:number}) => {

    const TabNavigation = useNavigation()

    return(
        <TglLogoContainer onPress={() => TabNavigation.navigate("Home")} size={80 * size}>
            <FontText italic Weight="bold" color="#707070" size={30 * size}>
                TGL
            </FontText>
            <FinalLine size={75 * size}>

            </FinalLine>
        </TglLogoContainer>
    )
}

export default TglLogo;