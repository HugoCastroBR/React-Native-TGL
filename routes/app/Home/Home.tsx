import React from 'react';
import { Button, View } from 'react-native';
import FontText from '../../../components/FontText/FontText';
import { useNavigation } from '@react-navigation/native';
import Page from '../../../components/Page';
import NewBetIcon from '../../../components/icons/newBetIcon';




const Home = () => {
    const navigation = useNavigation()
    return (
        <Page header>
            <View style={{backgroundColor:'red', width:1000, height:1000}}>
            <FontText font='Bold' italic Weight='bold'>Home</FontText>
            <FontText font='Bold' italic Weight='bold'>Home</FontText>
            <Button title="exit" onPress={() => {navigation.navigate('Auth')}} />

            </View>
        </Page>
    );
}

export default Home;