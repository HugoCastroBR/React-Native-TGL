import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import TabManager from '../navigation/Tab';



const AppIndex = () => {
    
    const navitgation = useNavigation()

    return (
        <NavigationContainer independent={true}>
            <TabManager/>
        </NavigationContainer>
    );
}

export default AppIndex;