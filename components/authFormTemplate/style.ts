import styled from "styled-components/native";
import { TextInput } from 'react-native-paper';

export const AuthFormTemplateStyle = styled.View`
	
	height: auto;
	width: 320px;
	background: #ffffff;
	box-shadow: 0px 3px 25px #00000014;
	border: 1px solid #dddddd;
	border-radius: 14px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 0px;
	overflow: hidden;
    margin-top: 100px;
	
`;

export const InputStyle = styled.TextInput`
	padding: 0px;
	padding-top: 2px;
	height: 71px;
	

	font: italic normal bold 20px/70px 'HelveticaMedium';
	padding-left: 30px;
	padding-right: 30px;

    width: 320px;
	margin: 0px;
`;

export const InputContainer = styled.View`
	display: flex;
	min-width: 350px;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
`;

export const ButtonSendStyle = styled.View`
	overflow: hidden;
	height: 120px;
	min-height: 120px;
	max-height: 120px;
	width: 100%;
	min-width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const InputItem = styled.View`
	border: none;
	border-bottom-width: 0px;
    border-color: #ebebeb;

`

export const ForgetPasswordContainer = styled.TouchableOpacity`
    margin-top: 20px;
    width: 300px;
    flex-direction: row;
    justify-content: flex-end;

`

