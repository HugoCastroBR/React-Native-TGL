import React, { useState,useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import { ActivityIndicator } from 'react-native'
import { LoadingScreenContainer  } from './style';
import FontText from '../FontText/FontText';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = ({action,error,redirect}:{action?:any, error?:boolean,redirect:string}) => {

    const Navigation = useNavigation()
    const [isError, setIsError] = useState(false)
    const [isSuccess, setSuccess] = useState(false)

    const Retry = () => {
        setIsError(false)

        if(action){
            action()
        }else{
            setSuccess(true)
        }
        // Pegar do Redux
        console.log("passou")
        if(isSuccess){
            Navigation.navigate(redirect)
        }
    }
    useEffect(() => {
        setIsError(true)
    },[isError])

    return (
        !isError ?
        <LoadingScreenContainer>
        <ActivityIndicator size={110} color='#B5C401' />
        </LoadingScreenContainer>
        :
        <LoadingScreenContainer>
            <FontText color="red" size={20}>
                An Error Occurred
            </FontText>
            <FontText  size={18}>
                Press to retry:
            </FontText>
            <TouchableOpacity style={{alignContent:'center',justifyContent:'center'}} onPress={() => {
                Retry()
            }}>
                    <Ionicons name="reload-circle-outline" size={50} color="black" />
            </TouchableOpacity>
        </LoadingScreenContainer>
    )
}

export default LoadingScreen;