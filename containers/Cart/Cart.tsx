import React from 'react';
import { Text, View } from 'react-native';
import FontText from '../../components/FontText/FontText';
import CartIcon from '../../components/icons/cartIcon';
import { CartButtonContainer, CartContainer, CartItemsContainer, CartText, CartTitleContainer, CartTotalContainer, CartTotalContainerText, CartTotalContainerTextLast, CloseCartButton } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import CartItem from '../../components/CartItem';
import { SavedGame } from '../../types';
import SimpleButton from '../../components/arrowButton/arrowButton';
import { color } from 'react-native-reanimated';


const Cart = () => {

    const navigation = useNavigation()



    const CartItems:SavedGame[] = [
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },

        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
        {
            numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            color: 'red',
            data: '1/1/1',
            price: 1.2,
            type: "Teste"
        },
    ]

    return (

        <CartContainer>
            <CartTitleContainer>

                <CartIcon />
                <CartText>
                    <FontText italic color="#707070" Weight="bold" size={26}>
                        CART
                    </FontText>
                </CartText>
                <CloseCartButton onPress={() => { navigation.dispatch(DrawerActions.closeDrawer()) }}>
                    <Ionicons name="close" size={30} color="#B5C401" />
                </CloseCartButton>
            </CartTitleContainer>
            <CartItemsContainer>
                {CartItems.map((element,index) => <CartItem {...element} index={index} key={index}/>)}
            </CartItemsContainer>
            <CartTotalContainer>
                <CartTotalContainerText>
                    <FontText italic color="#707070" size={20} Weight='bold'>CART </FontText>
                    <CartTotalContainerTextLast>
                        <FontText  color="#707070" size={20} font="Light">TOTAL: </FontText>
                    </CartTotalContainerTextLast>
                </CartTotalContainerText>
                <FontText Weight="bold" color="#707070" size={20}>R$ 20,00</FontText>
            </CartTotalContainer>
            <CartButtonContainer>
                <SimpleButton Arrow Color="#B5C401" ArrowSize={[50,36]}>
                    <FontText color="#B5C401" size={32} italic Weight="bold">
                        Save
                    </FontText>
                </SimpleButton>
            </CartButtonContainer>
        </CartContainer>

    );
}

export default Cart;