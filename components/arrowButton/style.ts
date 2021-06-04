import styled  from 'styled-components/native';

export const ButtonStyle = styled.TouchableOpacity<{
	FontSize: number;
	LinkColor: string;
	AuthTemplate: boolean;
}>`
	color: #707070;
	display: flex;
	flex-direction: row;
	width: ${(props) => `${props.AuthTemplate ? "350px" : "100px"}`};
	height: 130px;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: transparent;

	
`;
