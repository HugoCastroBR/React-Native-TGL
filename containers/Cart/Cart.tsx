import React from 'react';
import { Text, View } from 'react-native';
import FontText from '../../components/FontText/FontText';
import CartIcon from '../../components/icons/cartIcon';
import { CartButtonContainer, CartContainer, CartItemsContainer, CartText, CartTitleContainer, CartTotalContainer, CloseCartButton } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import CartItem from '../../components/CartItem';
import { SavedGame } from '../../types';


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
                <View>
                    <FontText></FontText>
                    <FontText></FontText>
                </View>
                <FontText></FontText>
            </CartTotalContainer>
            <CartButtonContainer>

            </CartButtonContainer>
        </CartContainer>

    );
}

export default Cart;