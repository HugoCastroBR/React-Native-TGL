import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';



const Login = () => {
    
    const navitgation = useNavigation()

    return (
        <View>
            <Text>
                Login
            </Text>
            <Button style={{marginTop: 100}} onPress={() => {
                navitgation.navigate('Home')
            }}>Login</Button>
        </View>
    );
}

export default Login;