import React from 'react';
import FontText from '../../../components/UI/FontText/FontText';
import CartIcon from '../../../components/UI/icons/cartIcon';
import { CartButtonContainer, CartContainer, CartItemsContainer, CartText, CartTitleContainer, CartTotalContainer, CartTotalContainerText, CartTotalContainerTextLast, CloseCartButton } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import CartItem from '../CartItem';
import { SavedGame } from '../../../types';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import useTGL from '../../../hooks/useStore';
import { SetCartErrorMsg, ResetCart,SetModalVisibility, SetRecentGames } from '../../../store/actions';
import { addToUserBets } from '../../../store/FetchActions/FetchBets';


const Cart = () => {

    const navigation = useNavigation()

    const {states,dispatch} = useTGL()


    


    const genTotal = (N:SavedGame[]) => {
        const NumberArr:number[] = N.map((E:SavedGame) => E.price)
        const sumReducer = (A:number,C:number) => {return Number(A) + Number(C)}
        const result = NumberArr.reduce(sumReducer)
        return String(Number(result).toFixed(2)).replace(".",",")
    }


    const SaveCart = () => {
        if(states.Game.Cart.length > 0){
            // Min Value
            if(Number(genTotal(states.Game.Cart).replace(",",".")) < 30){ 
                dispatch(SetCartErrorMsg("O valor minimo é de R$ 30.00","red"))
                dispatch(SetModalVisibility(true))
            }else{
                dispatch(ResetCart())
                dispatch(SetCartErrorMsg("Compra Salva"))
                dispatch(SetModalVisibility(true))
                const elementsToPost = [...states.Game.Cart].map(element => {
                    const GameId = states.Game.GamesData.find(e => e.type === element.type)

                    if(typeof(GameId?.id) !== 'number'){
                        return {numbers:element.numbers, game_id: 0}
                    }else{
                        return {numbers:element.numbers, game_id: GameId.id}
                    }
                    
                })
                
                addToUserBets(elementsToPost)
                const NewRecentGames:SavedGame[] = elementsToPost.map((element) => {
                    const currentGame = states.Game.GamesData.find(e => e.id === element.game_id)
                    if(currentGame){
                        const now = new Date()
                        return (
                            {
                                active: currentGame.active,
                                color: currentGame.color,
                                data: now.toString(),
                                price: currentGame.price,
                                type: currentGame.type,
                                numbers: element.numbers,
                            } as SavedGame
                        )
                    }else{
                        return {} as SavedGame
                    }
                })

                const toSend = [...NewRecentGames,...states.Game.RecentGames]
                dispatch(SetRecentGames(toSend))
            }
        }else{
            dispatch(SetCartErrorMsg("Carrinho vazio","red"))
        }
    }
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
                {states.Game.Cart.length > 0 ?
                states.Game.Cart.map((element,index) => <CartItem {...element} index={index} key={index}/>) :
                <FontText italic Weight="bold" color="#707070" size={20} >Empty Cart</FontText>
                }
                {}
            </CartItemsContainer>
            <CartTotalContainer>
                <CartTotalContainerText>
                    <FontText italic color="#707070" size={20} Weight='bold'>CART </FontText>
                    <CartTotalContainerTextLast>
                        <FontText  color="#707070" size={20} font="Light">TOTAL: </FontText>
                    </CartTotalContainerTextLast>
                </CartTotalContainerText>
                <FontText Weight="bold" color="#707070" size={20}>R$ {states.Game.Cart.length > 0 ? genTotal(states.Game.Cart) : '0.00'}</FontText>
            </CartTotalContainer>
            <CartButtonContainer onPress={SaveCart}>
                <SimpleButton Arrow Color="#B5C401" ArrowSize={[50,36]} PressAction={SaveCart}>
                    <FontText color="#B5C401" size={32} italic Weight="bold">
                        Save
                    </FontText>
                </SimpleButton>
            </CartButtonContainer>
        </CartContainer>

    );
}

export default Cart;

