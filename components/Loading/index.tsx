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

const LoadingScreen = () => {


    const { states, dispatch } = useTGL()

    useFocusEffect(
        React.useCallback(() => {
            const unsubscribe = () => { 
                console.log(": ",states.App.isGlobalError)
                dispatch(SetGlobalError(false))
                dispatch(SetLoadingSuccess(false))
            };

            return () => unsubscribe();
        }, [])

    )

    useEffect(() => {
        console.log(": ",states.App.isGlobalError)
    },[])





    if(states.App.isLoading ){
        return (
                <LoadingScreenContainer>
                    <ActivityIndicator size={110} color='#B5C401' />
                </LoadingScreenContainer>
        )
    }else{
        return(
            <View>
            
            </View>
        )
    }
}

export default LoadingScreen;