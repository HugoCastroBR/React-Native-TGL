import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../../app/Home/Home';
import AuthIndex from '../../auth/Index';
import AppIndex from './../../app/Index';

const Stack = createStackNavigator();

const StackManager = () => {
    return( 
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Auth" component={AuthIndex} />
            <Stack.Screen name="App" component={AppIndex} />
            
        </Stack.Navigator>
    )
}

export default StackManager;