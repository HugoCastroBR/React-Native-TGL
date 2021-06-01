/* eslint-disable react/display-name */
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../app/Home';
import Login from '../../auth/Login';


import { Button, View } from 'react-native';
import { Text } from 'react-native-svg';
import FontText from '../../../components/FontText/FontText';
import LogoutIcon from '../../../components/icons/logout';
import { HeaderButtonsContainer } from './style';




const Stack = createStackNavigator();





const StackManager = () => {
    return (

        <Stack.Navigator initialRouteName="Home" headerMode='screen' >
            <Stack.Screen name="Home" component={Home} options={{
                headerStyle: {
                    backgroundColor: 'green',
                },
                headerTitle: () => (
                    <View style={{backgroundColor:'green'}}>
                        <FontText>
                            TGL
                        </FontText>
                    </View>
                ),
                headerRight: () => (
                    <HeaderButtonsContainer >
                        <LogoutIcon/>
                    </HeaderButtonsContainer>
                ),
            }} 
            />
            <Stack.Screen name="Auth" component={Login} options={{
                headerShown:false
                // headerStyle: {
                //     backgroundColor: 'green',
                // },
                // headerLeft: () => (''),
                // headerTitle: () => (
                //     <View style={{backgroundColor:'green'}}>
                //         <FontText>
                //             TGL
                //         </FontText>
                //     </View>
                // ),
                // headerRight: () => (
                //     <HeaderButtonsContainer >
                //         <LogoutIcon/>
                //     </HeaderButtonsContainer>
                // ),
            }}/>
        </Stack.Navigator>

    )
}

export default StackManager;