/* eslint-disable react/display-name */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import FontText from '../../../components/FontText/FontText';
import Home from '../../app/Home/Home';
import NewBetManager from '../../app/NewBet/';
import ForgotPassword from '../../auth/ForgotPassword/ForgotPassword';
import Login from '../../auth/Login/Login';
import Register from '../../auth/Register/Register';
import Account from '../../app/Account/Account';


const Tab = createBottomTabNavigator();

const AuthTabManager = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: { backgroundColor: 'gray', alignItems: 'center' }
            
        }}
        screenOptions={{
            tabBarVisible: false
        }}
        >
            <Tab.Screen name="Login" component={Login} options={{

                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontText>
                        Login
                        </FontText>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Register" component={Register} options={{

                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontText>
                        Register
                        </FontText>
                    </View>
                )
            }} />

            <Tab.Screen name="ForgotPassword" component={ForgotPassword} options={{

            tabBarIcon: ({ focused }) => (
                <View>
                    <FontText>  
                    ForgotPassword
                    </FontText>
                </View>
            )
            }} />


            {/* Dont Show */}


            

        </Tab.Navigator>
    )
}

export default AuthTabManager;