import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontText from '../FontText/FontText';
import Page from '../Page';
import FilterSelect from '../../containers/filterSelect';
import { RecentGamesTitle, FiltersContainer, FilterTitleContainer, CurrentNumber, CurrentNumbersContainer, DeleteNumber, EndContainer, EndItem, CurrentBetContainer, GameRulesDesc, GameSelectorContainer, TitleContainer } from './style';




const CurrentBet = () => {

    let ShowNumbers = false

    const Numbers = [1,2,3,4,5,6,7,8,9,10]
    return (
            <CurrentBetContainer >
                <RecentGamesTitle>
                    <FiltersContainer>
                        <FontText size={30} italic Weight="bold" color="#707070">
                        New bet for LOTOMANIA
                        </FontText>
                        {/* <span>{states.Game.RecentGames.length > 0 && "Filters"}</span> */}
                        <FilterTitleContainer>
                            <FontText size={20} italic  color="#707070">Choose a game</FontText>
                        </FilterTitleContainer>
                        <FilterSelect />
                        <View>
                            <GameRulesDesc>
                                <FontText>Fill your bet</FontText>
                                <FontText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut deserunt saepe sit dolores dolorem. Numquam quasi praesentium odit! Neque laudantium quasi voluptate voluptatem totam sapiente ducimus nulla hic ullam consectetur.</FontText>
                            </GameRulesDesc>
                        </View>
                    </FiltersContainer>

                    
                </RecentGamesTitle>
                <CurrentNumbersContainer>
                    {Numbers.map((element,index) => (
                        <CurrentNumber key={index}>
                        <DeleteNumber onPress={() => {console.log("delete number")}}>
                            <FontText color="white" size={14}>x</FontText>
                        </DeleteNumber>

                        <FontText color="white">{element}</FontText>
                    </CurrentNumber>
                    ))}
                    
                </CurrentNumbersContainer>
                
                <EndContainer>
                    <EndItem></EndItem>
                </EndContainer>
            </CurrentBetContainer>

    );
}

export default CurrentBet;