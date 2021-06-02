/* eslint-disable react/display-name */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import FontText from '../../../components/FontText/FontText';
import Home from '../../app/Home/Home';
import NewBetManager from '../../app/NewBet';
import Account from '../../app/Account/Account';
import { color } from 'react-native-reanimated';


const Tab = createBottomTabNavigator();

const TabManager = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: { backgroundColor: 'gray', alignItems: 'center' }
        }}
        
        >
            <Tab.Screen name="Home" component={Home} options={{

                tabBarIcon: ({ focused }:{focused: boolean}) => (
                    <View>
                        <FontText {...focused && {color:"green"}} >
                            Home
                        </FontText>
                    </View>
                )
            }}
            />
            <Tab.Screen name="NewBet" component={NewBetManager} options={{

                tabBarIcon: ({ focused }:{focused: boolean}) => (
                    <View>
                        <FontText {...focused && {color:"green"}} >
                            NewBet
                        </FontText>
                    </View>
                )
            }} />

            <Tab.Screen name="Account" component={Account} options={{

            tabBarIcon: ({ focused }:{focused: boolean}) => (
                <View>
                    <FontText {...focused && {color:"green"}} >  
                        Account
                    </FontText>
                </View>
            )
            }} />


            {/* Dont Show */}


            

        </Tab.Navigator>
    )
}

export default TabManager;