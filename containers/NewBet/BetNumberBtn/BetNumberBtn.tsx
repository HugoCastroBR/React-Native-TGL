import React from 'react';
import useTGL from '../../../hooks/useStore';
import { SetCartErrorMsg, SetCurrentGame, SetModalVisibility } from '../../../store/actions';
import { NumberBtnProps } from '../../../types';
import FontText from '../../../components/UI/FontText/FontText';
import { NumberBtn } from './style';




const BetNumberBtn = ({number,selected=false,color="#B5C401"}:NumberBtnProps & {color?:string}) => {

    const { states, dispatch } = useTGL()


    const HandleNumberClick = (NumberToAdd: number) => {

        const currentGame = states.Game.GamesData.find(e => e.active)

        const NowData = new Date()
        const Data = NowData
        const data = `${Data.getDay()}/${Data.getMonth()}/${Data.getFullYear()}`
        const OldState = { ...states.Game.CurrentGame }
        let NumberList: number[] = []

        if (OldState?.numbers?.length) {
            if (OldState.numbers.length >= 1) {
                NumberList = [...OldState.numbers]
            }
        } else {
            
            NumberList = []
        }

        if (NumberList.length < (currentGame?.['max-number'] ? currentGame?.['max-number'] : 0)) {
            if (NumberList.length > 0) {
                const Iindex = OldState.numbers.indexOf(NumberToAdd)
                if (Iindex !== -1) {
                    NumberList.splice(Iindex, 1)
                } else {
                    NumberList.push(NumberToAdd)
                }
            } else {

                NumberList.push(NumberToAdd)
            }

            
            if(currentGame){
                dispatch(SetCurrentGame({
                    color: currentGame.color,
                    data,
                    numbers: NumberList,
                    price: currentGame.price,
                    type: currentGame.type,
                    active: currentGame.active
                }))
            }
        } else {
            
            const Iindex = OldState.numbers.indexOf(NumberToAdd)

            if(currentGame){
                if(Iindex !== -1){
                    NumberList.splice(Iindex, 1)
                    dispatch(SetCurrentGame({
                        color: currentGame.color,
                        data,
                        numbers: NumberList,
                        price: currentGame.price,
                        type: currentGame.type,
                        active: currentGame.active
                    }))
                }else{
                    dispatch(SetCartErrorMsg(`You can only select ${currentGame?.['max-number']} numbers `,"red"))
                    dispatch(SetModalVisibility(true))
                }
            }
        }



    }

    return (
        <NumberBtn selected={selected} color={color} onPress={
            () => {HandleNumberClick(number)}
        }>
            <FontText color="white" Weight="bold" size={20}>
                {number <= 9? `0${number}`: number }
            </FontText>
        </NumberBtn>
    )
}

export default BetNumberBtn;