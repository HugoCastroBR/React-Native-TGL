/* eslint-disable react/display-name */
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../app/Home';
import Login from '../../auth/Login';
import { Text, View } from 'react-native';

import styled  from 'styled-components/native';
import FontText from './../../../containers/FontText/FontText';


const HeaderContainer = styled.View`
    position: absolute;
    background-color: red;
    width: 100%;
    height: 100px;
    justify-content: center;

`


const Stack = createStackNavigator();



const Header = () => {
    return(
        <HeaderContainer >
            <FontText color='white' Weight='bold' italic >
                Header
            </FontText>
        </HeaderContainer>
    )
}

const StackManager = () => {
    return (
        
            <Stack.Navigator initialRouteName="Home" headerMode='screen' screenOptions={
                {
                    header:() => {return <Header/>}
                }
            }>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Auth" component={Login} />
            </Stack.Navigator>
        
    )
}

export default StackManager;