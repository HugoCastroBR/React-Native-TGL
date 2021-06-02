import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import TabManager from '../navigation/AppTab';



const AppIndex = () => {
    
    const navitgation = useNavigation()

    return (
            <TabManager/>
    );
}

export default AppIndex;