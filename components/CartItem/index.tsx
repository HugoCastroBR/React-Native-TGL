import React from 'react';
import NumbersFormatter from '../../functions/NumbersFormater';
import { SavedGame } from '../../types';
import { CartItemStyle, DeleteContainer, GameTypePriceContainer, ItemInfosContainer } from './style';
import FontText from './../FontText/FontText';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useTGL from '../../hooks/useStore';
import { DeleteCartItem } from '../../store/actions';
import { AntDesign } from '@expo/vector-icons';



const CartItem = ({
    color = "",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data = '',
    numbers = [],
    price = 0,
    type = "",
    index
}: SavedGame & { index: number }) => {

    const { dispatch } = useTGL()

    const DeleteFunction = () => {
        dispatch(DeleteCartItem(index))

    }


    return (
        <CartItemStyle>
            <ItemInfosContainer color={color}>
                <FontText>
                    {numbers.map((element: number, index: number) => NumbersFormatter(numbers.length, element, index))}
                </FontText>
                <GameTypePriceContainer>

                    <FontText>
                        R$ {String(Number(price).toFixed(2)).replace(".", ",")}
                    </FontText>
                    <FontText color={color}>
                        {type}
                    </FontText>
                </GameTypePriceContainer>
            </ItemInfosContainer>
            <DeleteContainer>
                <TouchableOpacity onPress={DeleteFunction}>
                    <AntDesign name="delete" size={22} color="black" />
                </TouchableOpacity>
            </DeleteContainer>
        </CartItemStyle>
    )
}

export default CartItem;