import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Page from '../../../../components/Page';
import FontText from '../../../../components/FontText/FontText';
import CurrentBet from '../../../../components/CurrentBet/CurrentBet';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../../components/Partials/Header/Header';
import { TitleContainer } from '../../../auth/Login/style';





const NewBet = () => {

    const navigation = useNavigation()
    return (
        <View style={{backgroundColor:'blue',flex:1}}>
                <View style={{position:'absolute',top:0,left:0,zIndex:10,opacity:1}}>
                    <Header navigation={navigation}/>
                    <CurrentBet/>
                </View>
                <ScrollView style={{marginTop:100}}>
                    <View style={{backgroundColor:'green',height:1000}}>
                        <FontText >
                            NewBet2
                        </FontText>
                        <FontText >
                            NewBet
                        </FontText>
                        <FontText >
                            NewBet
                        </FontText>
                        <FontText >
                            NewBet
                        </FontText>
                        <FontText >
                            NewBet
                        </FontText>
                        <FontText >
                            NewBet
                        </FontText>
                        <FontText >
                            NewBet
                        </FontText>
                    </View>
                </ScrollView>
                
        </View>
    );
}

export default NewBet;