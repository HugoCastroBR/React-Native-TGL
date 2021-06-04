import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Page from '../../../components/Page';



const Login = () => {
    
    const navitgation = useNavigation()

    return (
        <Page footer>
            <Text>
                Login
            </Text>
            <Button style={{marginTop: 100}} onPress={() => {
                navitgation.navigate('App')
            }}>Login</Button>
        </Page>
    );
}

export default Login;