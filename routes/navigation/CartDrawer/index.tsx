import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewBet from '../../app/NewBet/NewBet/NewBet';
import FontText from './../../../components/FontText/FontText';
import Cart from '../../../containers/Cart/Cart';


const Drawer = createDrawerNavigator();

const NewBetDrawerManager = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" 
        drawerPosition='right'
        drawerContent={(props) => <Cart/>}
        >
            <Drawer.Screen name="NewBet"  component={NewBet} />
        </Drawer.Navigator>
    );
}

export default NewBetDrawerManager;