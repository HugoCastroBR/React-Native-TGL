import React from 'react';
import { View } from 'react-native';
import FontText from '../../components/FontText/FontText';




const Home = () => {
    return (
        <View style={{backgroundColor:'red', width:1000, height:1000}}>
            <FontText font='Bold' italic Weight='bold'>Home</FontText>
            <FontText font='Bold' italic Weight='bold'>Home</FontText>
        </View>
    );
}

export default Home;