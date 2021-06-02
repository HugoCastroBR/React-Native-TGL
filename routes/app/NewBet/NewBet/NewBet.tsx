import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Page from '../../../../components/Page';
import FontText from '../../../../components/FontText/FontText';



const NewBet = ({ navigation }: {navigation:any}) => {


    return (
        <Page navigation={navigation}>
            <View style={{marginTop:100}}>
                <FontText >
                    NewBet
                </FontText>
                
            </View>
        </Page>
    );
}

export default NewBet;