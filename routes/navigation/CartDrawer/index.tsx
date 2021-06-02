import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewBet from '../../app/NewBet/NewBet/NewBet';
import Cart from '../../app/NewBet/Cart/Cart';


const Drawer = createDrawerNavigator();

const NewBetDrawerManager = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" 
        drawerStyle={{backgroundColor:'blue'}}
        drawerPosition='right'
        >   
            <Drawer.Screen name="NewBet"  component={NewBet} />
            <Drawer.Screen name="Cart"  component={Cart} />
        </Drawer.Navigator>
    );
}

export default NewBetDrawerManager;