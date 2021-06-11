import styled from "styled-components/native";
import FontText from '../../../components/UI/FontText/FontText';

export const CartContainer = styled.View`
    padding-top: 70px;
    
`

export const CartTitleContainer = styled.View`
    width: 90%;
    margin-left: 5%;
    flex-direction: row;
`

export const CartItemsContainer = styled.ScrollView`
    margin-top: 20px;
    width: 90%;
    margin-left: 5%;    
    height: 60%;
`


export const CartTotalContainer = styled.View`
    width: 90%;
    margin-left: 5%;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 30px;
`

export const CartTotalContainerText = styled.View`
    flex-direction: row;
    margin-top: -2px;

`

export const CartTotalContainerTextLast = styled.View`
    margin-top: 2px;
    margin-left: 3px;

`

export const CartButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    background-color: #EBEBEB;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 10px;
`

export const CartText = styled.View`
    
    margin-top: -6px;
    margin-right: 40%;
    margin-left: -8%;
`

export const CloseCartButton = styled.TouchableOpacity`
    margin-top: -20px;

`