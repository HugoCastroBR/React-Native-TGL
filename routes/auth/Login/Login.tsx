import { Link, useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import AuthFormTemplate from '../../../components/authFormTemplate';

import { ButtonSendStyle, ForgetPasswordContainer, InputContainer, InputItem, InputStyle } from '../../../components/authFormTemplate/style';
import AuthInput from '../../../components/AuthInput/AuthInput';
import FontText from '../../../components/FontText/FontText';
import Page from '../../../components/Page';
import TglLogo from '../../../components/TglLogo/TglLogo';
import { AuthInputType } from '../../../types';
import { AuthContainer, ErrorContainer, FormContainer, LogoContainer, TitleContainer } from './style';
import Footer from './../../../components/Partials/Footer/Footer';
import SplashImage from '../../../components/Splash/Splash';
import useTGL from './../../../hooks/useStore';
import { AuthSetMessage } from './../../../store/actions';
import { useCallback } from 'react';
import { tryAuth } from '../../../store/FetchActions/FetchAuth';




const Login = () => {

    const navigation = useNavigation()

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')


    const {states, dispatch} = useTGL() 



    const setMessage = useCallback((message='',messageColor='red') => {
        dispatch(AuthSetMessage(message,messageColor))

    },[states.Auth.message])

    useEffect(() => {
        if(email == '' && password == ''){
            console.log("empty")
        }else{
            ValidAllInputs()
        }
    },[email,password])

    useEffect(() =>  setMessage(),[])

    const FunctionLogin = () => {

        if(ValidAllInputs()){
        
                dispatch(tryAuth(email,password))
                setMessage("Tentando entrar...","green")

            }
        }


    const ValidAllInputs = () => {
        if(validEmail(email) && ValidPassword(password)){
            setMessage('')
            return true
        }
    }
    const validEmail = (email: string) => {
        if(email){
            if(/^[^@]+@\w+(\.\w+)+\w$/.test(email)){
                setMessage('')
                return true
            }else{
                setMessage('Invalid Email')
                return false
            }
            
        }else{
            setMessage('The Email field have to be filled')
            return false
        }
    }


    const ValidPassword = (password: string) => {
        if (password) {
            if(password.length >= 6){
                setMessage('')
                return password
            }else{
                setMessage('The password has to be up to 6 characters')
                return false
            }
            
        } else {
            setMessage('The password field have to be filled')
            return false
        }
    }

    return (
        <Page >

            <SplashImage/>
            
            <AuthContainer >
                <FormContainer >
                <TitleContainer >
                    <LogoContainer >
                        <TglLogo size={1.8}/>
                    </LogoContainer>
                    <FontText italic Weight="bold" size={36} color="#707070">Authentication</FontText>
                </TitleContainer>
                <AuthFormTemplate name="LoginForm" >
                    <InputContainer>

                        <AuthInput label="Email" type="email" actionChange={setEmail}/>
                        <AuthInput hidden label="Password" type="password" actionChange={setPassword}/>

                        <ForgetPasswordContainer onPress={() => {navigation.navigate('ForgotPassword')}}>
                            <FontText italic color="#C1C1C1">I forget my password</FontText>
                        </ForgetPasswordContainer>
                    </InputContainer>
                    <ErrorContainer>
                        <FontText color={states.Auth.messageColor} font="Light" size={14 }>{states.Auth.message}</FontText>
                    </ErrorContainer>
                    <ButtonSendStyle>
                        <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {
                            // navigation.navigate("App")

                            // dispatch(AuthSetMessage("Error","red"))

                            FunctionLogin()
                    }}>
                            <FontText color={"#B5C401"} size={30} italic Weight="bold">Log in</FontText>
                        </SimpleButton>
                    </ButtonSendStyle>
                </AuthFormTemplate>
                </FormContainer>
                <SimpleButton Arrow={true} Color={"#707070"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {navigation.navigate("Register")}}>
                    <FontText color={"#707070"} size={30} italic Weight="bold">Sign up</FontText>
                </SimpleButton>
                <View style={{alignItems:'center',width:'100%',marginTop: -50}}>
                    <Footer/>
                </View>
            </AuthContainer>

            {/* <Button style={{marginTop: 100}} onPress={() => {
                navitgation.navigate('App')
            }}>Login</Button> */}

        </Page>
    );
}

export default Login;