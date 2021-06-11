/* eslint-disable react/display-name */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import FontText from '../../../components/UI/FontText/FontText';
import Home from '../../app/Home/Home';
import NewBetManager from '../../app/NewBet';
import Account from '../../app/Account/Account';
import { color } from 'react-native-reanimated';
import AppTabItem from '../../../components/AppTabItem/AppTabItem';
import Accounticon from '../../../components/UI/icons/AccountIcon';
import HomeIcon from '../../../components/UI/icons/HomeIcon';
import NewBetIcon from '../../../components/UI/icons/newBetIcon';


const Tab = createBottomTabNavigator();

const TabManager = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            
            style: { 
                position:'absolute',
                backgroundColor: '#FEFEFE',
                alignItems: 'center',
                height: 70,
                borderTopLeftRadius:16,
                borderTopRightRadius:16,
                elevation:0,
                bottom: 0,
                paddingLeft: 16,
                paddingRight: 16,
            
            }
        }}
        
        >
            <Tab.Screen name="Home" component={Home} options={{

                tabBarIcon: ({ focused }:{focused: boolean}) => (
                    <AppTabItem  
                    title="Home"
                    focused={focused} 
                    icon={<HomeIcon color={focused?"#B5C401":"#C1C1C1"}/>}
                    />
                )
            }}
            />
            <Tab.Screen name="NewBet" component={NewBetManager} options={{

                tabBarIcon: ({ focused }:{focused: boolean}) => (
                    <AppTabItem 
                    focused={focused} 
                    icon={<View style={{
                        borderWidth:4,
                        borderColor:'white',
                        borderRadius: 100,
                        elevation: 4,
                        marginBottom: 22
                        
                        }}>
                            <NewBetIcon/>
                        </View>}
                    />
                )
            }} />

            <Tab.Screen name="Account" component={Account} options={{

            tabBarIcon: ({ focused }:{focused: boolean}) => (
                <AppTabItem 
                title="Account"
                focused={focused} 
                icon={<Accounticon color={focused?"#B5C401":"#C1C1C1"}/>}
                />
            )
            }} />


            {/* Dont Show */}


            

        </Tab.Navigator>
    )
}

export default TabManager;