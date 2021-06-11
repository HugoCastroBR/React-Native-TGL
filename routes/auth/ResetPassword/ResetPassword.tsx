import { Link, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import AuthFormTemplate from '../../../components/authFormTemplate';

import { ButtonSendStyle, ForgetPasswordContainer, InputContainer, InputItem, InputStyle } from '../../../components/authFormTemplate/style';
import AuthInput from '../../../components/AuthInput/AuthInput';
import FontText from '../../../components/UI/FontText/FontText';
import Page from '../../../components/UI/Page';
import TglLogo from '../../../components/UI/TglLogo/TglLogo';
import { AuthInputType } from '../../../types';
import { AuthContainer, FormContainer, TitleContainer, LogoContainer, ErrorContainer } from '../Login/style';
import Footer from './../../../components/Partials/Footer/Footer';




const ResetPassword = () => {

    const navigation = useNavigation()

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <Page>
            
            <AuthContainer >
                <FormContainer >
                <TitleContainer >
                    <LogoContainer >
                        <TglLogo size={1.8}/>
                    </LogoContainer>

                    <FontText italic Weight="bold" size={36} color="#707070">Reset Password</FontText>
                    
                </TitleContainer>
                <AuthFormTemplate  >
                    <InputContainer>


                        <AuthInput hidden label="Password" type="password" actionChange={setEmail}/>
                        <AuthInput hidden label="Confirm Password" type="password" actionChange={setEmail}/>

                    </InputContainer>
                    <ErrorContainer>
                        <FontText color="red" font="Light" size={14 }>Error</FontText>
                    </ErrorContainer>
                    <ButtonSendStyle>
                        <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {navigation.navigate("Login")}}>
                            <FontText color={"#B5C401"} size={30} italic Weight="bold">Save</FontText>
                        </SimpleButton>
                    </ButtonSendStyle>
                </AuthFormTemplate>
                </FormContainer>
                <View style={{marginRight:36}}>
                    <SimpleButton Arrow={true} Color={"#707070"} ArrowSize={[50, 40]} AuthTemplate={true} ReverseArrow PressAction={() => {navigation.navigate("ForgotPassword")}}>
                        <FontText color={"#707070"} size={30} italic Weight="bold">Back</FontText>
                    </SimpleButton>
                </View>
                <View style={{alignItems:'center',width:'100%',marginTop: -50}}>
                    <Footer/>
                </View>
            </AuthContainer>

            {/* <Button style={{marginTop: 100}} onPress={() => {
                navitgation.navigate('App')
            }}>ResetPassword</Button> */}

        </Page>
    );
}

export default ResetPassword;