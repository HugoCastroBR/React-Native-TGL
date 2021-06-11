import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CurrentBet from '../../../../containers/CurrentBet/CurrentBet';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../../components/Partials/Header/Header';
import {  NumbersContainer } from './style';
import BetNumberBtn from '../../../../containers/NewBet/BetNumberBtn/BetNumberBtn';
import useTGL from '../../../../hooks/useStore';
import Modal from '../../../../containers/Others/Modal/Modal';




const inRange = (N: number) => {
    // eslint-disable-next-line prefer-const
    let Arr = []
    while (Arr.length < N) {
        Arr.push(Arr.length ? Arr.length + 1 : 1)
    }
    return Arr
}



const NewBet = () => {
    const { states  } = useTGL()

    const navigation = useNavigation()

    
    const currentGame = states.Game.GamesData.find(e => e.active)

    return (

        <View style={{backgroundColor:'transparent',flex:1}}>
            <Modal/>

                <View style={{position:'absolute',top:0,left:0,zIndex:10,opacity:1}}>
                    <Header navigation={navigation}/>
                    <CurrentBet/>
                </View>
                <ScrollView style={{marginTop:100}}>
                <NumbersContainer>
                    {inRange(currentGame?.range ? currentGame?.range: 100).map((element, index) =>
                        
                        {
                            const isSelected = states?.Game?.CurrentGame?.numbers?.find(e => e == element)
                            return(
                                <BetNumberBtn key={index} number={element} selected={isSelected ? true : false }  color={currentGame?.color} />
                            )
                        }

                    )}
                </NumbersContainer>
                </ScrollView>
        </View >
    );
}

export default NewBet;