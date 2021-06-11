import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontText from '../../../components/UI/FontText/FontText';
import useTGL from '../../../hooks/useStore';
import { SetCurrentGame, SetGamesData } from '../../../store/actions';
import { GameDataProps,  SavedGame } from '../../../types';
import { GameSelectButton } from './style';




const GameSelect = () => {

    const { states, dispatch } = useTGL()
    

    const SelectGame = (element:GameDataProps) => {
        console.log(44)
        dispatch(SetCurrentGame({} as SavedGame))
        let NewGameData = [...states.Game.GamesData]

        console.log(element.type)
        NewGameData = NewGameData.map(e => {
            if(e.type === element.type){
                return {...e,active:true}
            }else{
                return {...e,active:false}
            }
        })

        console.log(66)
        dispatch(SetGamesData(NewGameData))
    }





    return (
        <View style={{flex:1}}>
            
            <ScrollView contentContainerStyle={{flexDirection:'row'}} showsHorizontalScrollIndicator={false} horizontal>
            
            {states.Game.GamesData.map((element,index) => {
                console.log(element)
                return(
                    <GameSelectButton
                    active={element.active}
                    color={element.color}
                    key={index}
                    onPress={() => {
                        const id = index
                        console.log(element.type)
                        const Element = states.Game.GamesData[Number(id)]
                        console.log("33")
                        SelectGame(Element)
                    }}>

                    <FontText italic Weight="bold" size={18} color={element.active? 'white' : element.color}>
                        {element.type}
                    </FontText>
                </GameSelectButton>
                )
            })}
        

    </ScrollView>

        </View>
        
    )
}

export default GameSelect;