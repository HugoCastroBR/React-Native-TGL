import React from 'react';
import { RecentGameItemContainer, PreBar, RecentGameItemStyle } from './style';
import FontText from './../FontText/FontText';
import NumbersFormatter from '../../functions/NumbersFormater'
import { SavedGame } from '../../types';


const RecentGameItem = ({type,price,color,data,numbers}:SavedGame) => {


    const ItemDate = new Date(data.slice(0,10))
    console.log("cu: ",price)
    return (
        <RecentGameItemContainer>
            <PreBar color={color}>

            </PreBar>
            <RecentGameItemStyle color={color}>

                <FontText color="#868686" italic Weight="bold">
                    {numbers.map((element:number,index:number) => NumbersFormatter(numbers.length,element,index))}

                </FontText>
                <FontText color="#868686" font="Medium">
                    {ItemDate.toLocaleDateString("en-US")} - (R$ {String(Number(price).toFixed(2)).replace(".",",")})

                </FontText>
                <FontText color={color} size={18} italic Weight="bold">
                    {type}

                </FontText>
            </RecentGameItemStyle>
        </RecentGameItemContainer>
    )
}

export default RecentGameItem;