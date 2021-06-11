import React, { useEffect } from 'react';
import {  View } from 'react-native';
import { LoadingScreenContainer } from './style';
import FontText from '../FontText/FontText';
import { useNavigation } from '@react-navigation/native';
import useTGL from '../../hooks/useStore';

const RetryLoading = ({ children }
    : {   children: React.ReactNode }) => {


    const { states } = useTGL()

    const Navigation = useNavigation()




    useEffect(
        () => {
            console.log(">",states.App.isLoadingSuccess)
            if (states.App.isLoadingSuccess === true) {
                console.log("deu sucesso ue")
                Navigation.navigate(states.App.nextPage)
            } 
        }

    ,[states.App.isLoadingSuccess])






    if(states.App.isGlobalError){
        return (
            <LoadingScreenContainer>
                <FontText color="red" size={20}>
                    An Error Occurred
            </FontText>
                <FontText size={18}>
                    Press to retry:
            </FontText>
                {children}
            </LoadingScreenContainer>
    )
    }else{
        return(
            <View>

            </View>
        )
    }
}

export default RetryLoading;