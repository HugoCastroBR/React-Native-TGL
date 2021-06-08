import React from 'react';
import NumbersFormatter from '../../functions/NumbersFormater';
import { SavedGame } from '../../types';
import { CartItemStyle, DeleteContainer,  GameTypePriceContainer,  ItemInfosContainer } from './style';
import FontText from './../FontText/FontText';
import { TouchableOpacity } from 'react-native-gesture-handler';




const CartItem = ({
        color = "",
        data = '',
        numbers = [],
        price = 0,
        type = "",
        index = -1
    } :SavedGame & {index:number}) => {

    


    
    return (
        <CartItemStyle>
            <DeleteContainer>
                <TouchableOpacity onPress={() => "Delete"}>
                    {/* Delete */}
                </TouchableOpacity>
            </DeleteContainer>
            <ItemInfosContainer color={color}>
                <FontText>
                    {numbers.map((element:any,index:number) => NumbersFormatter(numbers.length,element,index))}
                </FontText>
                <GameTypePriceContainer>
                    
                    <FontText>
                        R$ {String(Number(price).toFixed(2)).replace(".",",")}
                    </FontText>
                    <FontText color={color}>
                        {type}
                    </FontText>
                </GameTypePriceContainer>
            </ItemInfosContainer>
        </CartItemStyle>
    )
}

export default CartItem;