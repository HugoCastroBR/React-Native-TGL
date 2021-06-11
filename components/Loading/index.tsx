import React, {  useEffect } from 'react';
import {  View } from 'react-native';
import { ActivityIndicator } from 'react-native'
import { LoadingScreenContainer } from './style';
import { useFocusEffect } from '@react-navigation/native';
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