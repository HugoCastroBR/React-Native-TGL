import { Link, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
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




const Login = () => {

    const navigation = useNavigation()

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')


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

                        <AuthInput label="Email" type="email"/>
                        <AuthInput hidden label="Password" type="password" actionChange={setEmail}/>

                        <ForgetPasswordContainer onPress={() => {navigation.navigate('ForgotPassword')}}>
                            <FontText italic color="#C1C1C1">I forget my password</FontText>
                        </ForgetPasswordContainer>
                    </InputContainer>
                    <ErrorContainer>
                        <FontText color="red" font="Light" size={14 }>Error</FontText>
                    </ErrorContainer>
                    <ButtonSendStyle>
                        <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {navigation.navigate("App")}}>
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