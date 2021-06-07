import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontText from '../../components/FontText/FontText';
import { GameSelectButtonType } from '../../types';
import { GameSelectButton } from './style';




const FilterSelect = () => {

    const Filters:GameSelectButtonType[] = [
        {
            active: true,
            color: 'red',
            index: 1
        },
        {
            active: false,
            color: 'blue',
            index: 2
        },
        {
            active: false,
            color: 'blue',
            index: 2
        },
        {
            active: false,
            color: 'blue',
            index: 2
        }
    ]





    return (
        <View style={{flex:1}}>
            
            <ScrollView contentContainerStyle={{flexDirection:'row'}} horizontal>
            
            {Filters.map((element,index) => {
                return(
                    <GameSelectButton
                    active={element.active}
                    color={element.color}
                    key={index}
                    data-type={'LotoEz'}
                    onPress={(event) => {
                        console.log(event)
                    }}>

                    <FontText italic Weight="bold" size={18} color={element.active? 'white' : element.color}>
                        LotoEz
                    </FontText>
                </GameSelectButton>
                )
            })}
        

    </ScrollView>

        </View>
        
    )
}

export default FilterSelect;