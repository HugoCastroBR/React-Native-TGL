import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import { ActivityIndicator } from 'react-native'
import { LoadingScreenContainer } from './style';
import FontText from '../FontText/FontText';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SetGlobalError, SetLoadingSuccess } from '../../store/actions';
import useTGL from '../../hooks/useStore';

const RetryLoading = ({ children }
    : {   children: React.ReactNode }) => {


    const { states, dispatch } = useTGL()

    const Navigation = useNavigation()

    const [retry, setRetry] = useState(0)






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