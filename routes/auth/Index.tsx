import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import AuthTabManager from '../navigation/AuthTab';
import TabManager from '../navigation/AppTab';



const AuthIndex = () => {
    
    const navitgation = useNavigation()

    return (
            <AuthTabManager/>
    );
}

export default AuthIndex;