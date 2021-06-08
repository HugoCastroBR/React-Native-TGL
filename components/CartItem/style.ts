import styled from "styled-components/native";

type CartItemProps = {
	color: string;
};

export const CartItemStyle = styled.View`
	width: 100%;
    margin-top: 10px;
    
`;

export const DeleteContainer = styled.View`
	width: 34px;

	justify-content: center;
	align-items: center;

`;
export const Delete = styled.View`
	background-color: transparent;
`;

export const ItemInfosContainer = styled.View<CartItemProps>`
    width: 100%;
	justify-content: space-around;
	align-items: flex-start;
	
    border-color: ${(props) => `${props.color}`};
	border-left-width: 4px;
	border-radius: 4px;
	padding-left: 12px;

`;


export const GameTypePriceContainer = styled.View`
    margin-top: 4px;
	width: 100%;
	align-items: flex-start;
	justify-content: flex-start;
	height: auto;
`;



