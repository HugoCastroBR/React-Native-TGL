import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Cart from '../../../containers/Cart/Cart';
import NewBetDrawerManager from '../../navigation/CartDrawer';

const Drawer = createDrawerNavigator();

const NewBetIndex = () => {
    return (
        <NewBetDrawerManager/>
    );
}

export default NewBetIndex;