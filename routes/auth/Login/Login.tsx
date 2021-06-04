import { Link, useNavigation } from '@react-navigation/native';
import React from 'react';
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




const Login = () => {

    const navigation = useNavigation()


    return (
        <Page footer>
            
            <View style={{ alignItems: 'center', justifyContent: 'center', height:"100%", }}>
                <View style={{alignItems: 'center'}}>
                <View style={{alignItems: 'center',marginBottom: -76, marginTop: 60}}>
                    <View style={{marginBottom: 40}}>
                        <TglLogo size={1.8}/>
                    </View>
                    <FontText italic Weight="bold" size={36} color="#707070">Authentication</FontText>
                </View>
                <AuthFormTemplate name="LoginForm" >
                    <InputContainer>
                        <AuthInput label="Email" type="email"/>
                        <AuthInput hidden label="Password" type="password"/>
                        <ForgetPasswordContainer >
                            <FontText italic color="#C1C1C1">I forget my password</FontText>
                        </ForgetPasswordContainer>
                    </InputContainer>

                    <ButtonSendStyle>
                        <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {navigation.navigate("App")}}>
                            <FontText color={"#B5C401"} size={30} italic Weight="bold">Log in</FontText>
                        </SimpleButton>
                    </ButtonSendStyle>
                </AuthFormTemplate>
                </View>
                <SimpleButton Arrow={true} Color={"#707070"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {navigation.navigate("App")}}>
                    <FontText color={"#707070"} size={30} italic Weight="bold">Sign up</FontText>
                </SimpleButton>
            </View>

            {/* <Button style={{marginTop: 100}} onPress={() => {
                navitgation.navigate('App')
            }}>Login</Button> */}

        </Page>
    );
}

export default Login;