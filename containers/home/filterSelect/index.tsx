import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontText from '../../../components/UI/FontText/FontText';
import useTGL from '../../../hooks/useStore';
import { ResetFilters, SelectFilter } from '../../../store/actions';
import { getGames } from '../../../store/FetchActions/FetchGames';
import { GameSelectButton } from './style';




const FilterSelect = () => {


    const {states,dispatch} = useTGL()



    useEffect(() => {
        dispatch(ResetFilters())
        dispatch(getGames())
        
    }, [])


        const SelectGame = (element:string) => {
            dispatch(SelectFilter(element))
        }


    const GenerateToShow = () => {

        let Filters = [...states.Game.RecentGames]
        const exist:string[] = []
        // eslint-disable-next-line array-callback-return
        Filters = Filters.filter((element) => {
            // eslint-disable-next-line no-empty
            if(exist.includes(element.type)){

            }else{
                exist.push(element.type)
                return element
            }
        })

        const ToShow = Filters.map((element, index) => {

            return(
                <GameSelectButton
                active={element.active}
                color={element.color}
                key={index}
                data-type={'LotoEz'}
                onPress={() => {
                    const ItemType = element.type
                    if(ItemType){
                    SelectGame(ItemType)
                }
                }}>

                <FontText italic Weight="bold" size={18} color={element.active? 'white' : element.color}>
                    {element.type}
                </FontText>
            </GameSelectButton>
            )

        })
        
        return ToShow
    }



    return (
        <View style={{flex:1}}>
            
            <ScrollView contentContainerStyle={{flexDirection:'row'}} showsHorizontalScrollIndicator={false} horizontal>
            {GenerateToShow()}
        

    </ScrollView>

        </View>
        
    )
}

export default FilterSelect;