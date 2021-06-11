import React, { createRef } from 'react';
import { View } from 'react-native';
import FontText from '../../components/UI/FontText/FontText';
import { RecentGamesTitle, FiltersContainer, FilterTitleContainer, CurrentNumber, CurrentNumbersContainer, DeleteNumber, EndContainer, EndItem, CurrentBetContainer, GameRulesDesc,  GameOptionBtn, GameOptionsContainer } from './style';

import ActionSheet from "react-native-actions-sheet";
import GameSelect from '../NewBet/gameSelect/index';
import useTGL from '../../hooks/useStore';
import { AddItemToCart, SetCartErrorMsg, SetCurrentGame, SetModalVisibility } from '../../store/actions';



const actionSheetRef = createRef<ActionSheet>();


const CurrentBet = () => {


    


    const { states, dispatch } = useTGL()
    const currentGame = states.Game.GamesData.find(e => e.active)


    const HandlerDispatch = (numbers: number[]) => {
        const NowData = new Date()
        const Data = NowData
        const data = `${Data.getDay()}/${Data.getMonth()}/${Data.getFullYear()}`

        if(currentGame){
            dispatch(SetCurrentGame({
                color: currentGame.color,
                data,
                numbers: numbers,
                price: currentGame.price,
                type: currentGame.type,
                active: currentGame.active
            }))
        }
    }

    const RandomComplete = () => {

        let randomNumbers: number[]
        if (states.Game.CurrentGame.numbers) {
            randomNumbers = [...states.Game.CurrentGame.numbers]
        } else {
            randomNumbers = []
        } // concat random numbers + current game numbers

        if(currentGame){
            while (randomNumbers.length < (currentGame['max-number'])) { // while don't have the required number of numbers
                randomNumbers.push(Math.floor(Math.random() * currentGame.range + 1)) // add a random number to the list
                // eslint-disable-next-line no-loop-func
                randomNumbers = randomNumbers.filter((element, index) => randomNumbers.indexOf(element) === index) // remove the repeated numbers
            }
            HandlerDispatch(randomNumbers)
        }
        
    }

    const ShowNumbers = states?.Game?.CurrentGame?.numbers?.length > 0 ? true : false




    const HandlerDeletion = (N: number) => {
        const oldNumbers = [...states.Game.CurrentGame.numbers]
        const IndexOf = oldNumbers.indexOf(N)
        
        oldNumbers.splice(IndexOf,1)
        dispatch(SetCurrentGame({...states.Game.CurrentGame,numbers:oldNumbers}))

    }

    return (
        <CurrentBetContainer >

            <RecentGamesTitle>
                <FiltersContainer>
                    <FontText size={30} italic Weight="bold" color="#707070">
                        New bet for {currentGame?.type.toUpperCase()}
                        </FontText>
                    {/* <span>{states.Game.RecentGames.length > 0 && "Filters"}</span> */}
                    <FilterTitleContainer>
                        <FontText size={20} italic color="#707070">Choose a game</FontText>
                    </FilterTitleContainer>
                    <GameSelect />
                    <View>
                        {!ShowNumbers && <GameRulesDesc>
                            <FontText>Fill your bet</FontText>
                            <FontText>{currentGame?.description}</FontText>
                        </GameRulesDesc>}
                    </View>
                </FiltersContainer>


            </RecentGamesTitle>
            {ShowNumbers && <CurrentNumbersContainer>
                {states.Game.CurrentGame.numbers.map((element, index) => (
                    <CurrentNumber key={index} color={currentGame?.color ?currentGame?.color : "red"  }>
                        <DeleteNumber onPress={() => {HandlerDeletion(element)}}>
                            <FontText color="white" size={14}>x</FontText>
                        </DeleteNumber>

                        <FontText color="white">{element}</FontText>
                    </CurrentNumber>

                ))}

            </CurrentNumbersContainer>}

            {
                ShowNumbers &&

                <GameOptionsContainer>
                    <GameOptionBtn onPress={() => {
                        RandomComplete()
                    }}>
                        <FontText color="#B5C401" size={14}>Complete Game</FontText>
                    </GameOptionBtn>
                    <GameOptionBtn onPress={
                        () => dispatch(SetCurrentGame({...states.Game.CurrentGame,numbers:[]}))
                    }>
                        <FontText color="#B5C401" size={14}>Clear Game</FontText>
                    </GameOptionBtn>
                    <GameOptionBtn Highlight
                    onPress={() => {
                        dispatch(AddItemToCart())
                        dispatch(SetCartErrorMsg("Item added to cart","red"))
                        dispatch(SetModalVisibility(true))
                        HandlerDispatch([])
                    }}
                    >
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