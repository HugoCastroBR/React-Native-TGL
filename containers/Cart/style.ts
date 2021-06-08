import styled from "styled-components/native";
import FontText from './../../components/FontText/FontText';

export const CartContainer = styled.View`
    padding-top: 70px;
`

export const CartTitleContainer = styled.View`
    width: 90%;
    margin-left: 5%;
    flex-direction: row;
`

export const CartItemsContainer = styled.ScrollView`
    margin-top: 10px;
    width: 90%;
    margin-left: 5%;    
    height: 60%;
`


export const CartTotalContainer = styled.View`
    width: 90%;
    margin-left: 5%;
    justify-content: space-between;
`

export const CartButtonContainer = styled.TouchableOpacity`

`

export const CartText = styled.View`
    
    margin-top: -6px;
    margin-right: 40%;
    margin-left: -8%;
`

export const CloseCartButton = styled.TouchableOpacity`
    margin-top: -20px;

`