import React, { createRef, useRef } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontText from '../FontText/FontText';
import Page from '../Page';
import FilterSelect from '../../containers/filterSelect';
import { RecentGamesTitle, FiltersContainer, FilterTitleContainer, CurrentNumber, CurrentNumbersContainer, DeleteNumber, EndContainer, EndItem, CurrentBetContainer, GameRulesDesc, GameSelectorContainer, TitleContainer, GameOptionBtn, GameOptionsContainer } from './style';

import ActionSheet from "react-native-actions-sheet";
import GameSelect from './../../containers/gameSelect/index';


const actionSheetRef = createRef<ActionSheet>();


const CurrentBet = () => {

    const ShowNumbers = false





    const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <CurrentBetContainer >

            <RecentGamesTitle>
                <FiltersContainer>
                    <FontText size={30} italic Weight="bold" color="#707070">
                        New bet for LOTOMANIA
                        </FontText>
                    {/* <span>{states.Game.RecentGames.length > 0 && "Filters"}</span> */}
                    <FilterTitleContainer>
                        <FontText size={20} italic color="#707070">Choose a game</FontText>
                    </FilterTitleContainer>
                    <GameSelect />
                    <View>
                        {!ShowNumbers && <GameRulesDesc>
                            <FontText>Fill your bet</FontText>
                            <FontText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut deserunt saepe sit dolores dolorem. Numquam quasi praesentium odit! Neque laudantium quasi voluptate voluptatem totam sapiente ducimus nulla hic ullam consectetur.</FontText>
                        </GameRulesDesc>}
                    </View>
                </FiltersContainer>


            </RecentGamesTitle>
            {ShowNumbers && <CurrentNumbersContainer>
                {Numbers.map((element, index) => (
                    <CurrentNumber key={index}>
                        <DeleteNumber onPress={() => { console.log("delete number") }}>
                            <FontText color="white" size={14}>x</FontText>
                        </DeleteNumber>

                        <FontText color="white">{element}</FontText>
                    </CurrentNumber>

                ))}

            </CurrentNumbersContainer>}

            {
                ShowNumbers &&

                <GameOptionsContainer>
                    <GameOptionBtn>
                        <FontText color="#B5C401" size={14}>Complete Game</FontText>
                    </GameOptionBtn>
                    <GameOptionBtn>
                        <FontText color="#B5C401" size={14}>Clear Game</FontText>
                    </GameOptionBtn>
                    <GameOptionBtn Highlight>
                        <FontText color="white" size={14}>Add to Cart</FontText>
                    </GameOptionBtn>
                </GameOptionsContainer>
            }


            <EndContainer>
                <EndItem onPress={() => { actionSheetRef?.current?.setModalVisible() }}></EndItem>

            </EndContainer>
        </CurrentBetContainer>

    );
}

export default CurrentBet;