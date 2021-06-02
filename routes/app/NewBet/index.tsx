import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Cart from './Cart/index';
import NewBet from './NewBet/index';

const Drawer = createDrawerNavigator();

const NewBetManager = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" 
        drawerStyle={{backgroundColor:'blue',position:'absolute',zIndex:10, height: 100}}
        screenOptions={{
            
        }}
        >   
            <Drawer.Screen name="NewBet"  component={NewBet} />
            <Drawer.Screen name="Cart"  component={Cart} />
        </Drawer.Navigator>
    );
}

export default NewBetManager;