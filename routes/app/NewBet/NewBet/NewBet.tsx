import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Page from '../../../../components/Page';
import FontText from '../../../../components/FontText/FontText';
import CurrentBet from '../../../../components/CurrentBet/CurrentBet';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../../components/Partials/Header/Header';
import { TitleContainer } from '../../../auth/Login/style';
import { HeaderNavContainer, NumbersContainer } from './style';
import BetNumberBtn from '../../../../components/BetNumberBtn/BetNumberBtn';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';



const inRange = (N: number) => {
    // eslint-disable-next-line prefer-const
    let Arr = []
    while (Arr.length < N) {
        Arr.push(Arr.length ? Arr.length + 1 : 1)
    }
    return Arr
}

// const NewBet = () => {

//     const navigation = useNavigation()
//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 20, opacity: 1 }}>
//                 <Header navigation={navigation} />
//                 <CurrentBet />
//             </View>

//             <ScrollView style={{ marginTop: 100,zIndex:-10 }}>
//                 <NumbersContainer>
//                     {inRange(100).map((element, index) =>

//                         <BetNumberBtn key={index} number={element} selected={false} />

//                     )}
//                 </NumbersContainer>

//             </ScrollView>

//         </View>
//     );
// }

// export default NewBet;



const NewBet = () => {

    const navigation = useNavigation()
    return (
        <View style={{backgroundColor:'transparent',flex:1}}>
                <View style={{position:'absolute',top:0,left:0,zIndex:10,opacity:1}}>
                    <Header navigation={navigation}/>
                    <CurrentBet/>
                </View>
                <ScrollView style={{marginTop:100}}>
                <NumbersContainer>
                    {inRange(100).map((element, index) =>

                        <BetNumberBtn key={index} number={element} selected={false} />

                    )}
                </NumbersContainer>
                </ScrollView>
        </View >
    );
}

export default NewBet;