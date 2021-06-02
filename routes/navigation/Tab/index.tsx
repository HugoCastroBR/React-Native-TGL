/* eslint-disable react/display-name */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import FontText from '../../../components/FontText/FontText';
import Home from '../../app/Home';
import NewBetManager from '../../app/NewBet/';
import Login from '../../auth/Login';
import Account from './../../app/Account';


const Tab = createBottomTabNavigator();

const TabManager = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: { backgroundColor: 'gray', alignItems: 'center' }
        }}
        
        >
            <Tab.Screen name="Home" component={Home} options={{

                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontText>
                            Home
                        </FontText>
                    </View>
                )
            }}
            />
            <Tab.Screen name="NewBet" component={NewBetManager} options={{

                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontText>
                            NewBet
                        </FontText>
                    </View>
                )
            }} />

            <Tab.Screen name="Account" component={Account} options={{

            tabBarIcon: ({ focused }) => (
                <View>
                    <FontText>  
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