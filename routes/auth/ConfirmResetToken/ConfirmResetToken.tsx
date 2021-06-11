import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import AuthFormTemplate from '../../../components/authFormTemplate';

import { ButtonSendStyle, InputContainer } from '../../../components/authFormTemplate/style';
import AuthInput from '../../../components/AuthInput/AuthInput';
import FontText from '../../../components/UI/FontText/FontText';
import Page from '../../../components/UI/Page';
import TglLogo from '../../../components/UI/TglLogo/TglLogo';
import { AuthContainer, FormContainer, TitleContainer, LogoContainer, ErrorContainer } from '../Login/style';
import Footer from './../../../components/Partials/Footer/Footer';




const ConfirmResetToken = () => {

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
                    <FontText italic Weight="bold" size={36} color="#707070">Confirm Token</FontText>
                </TitleContainer>
                <AuthFormTemplate name="ConfirmResetTokenForm" >
                    <InputContainer>

                        <AuthInput label="Token" />

                    </InputContainer>
                    <ErrorContainer>
                        <FontText color="red" font="Light" size={14 }>Error</FontText>
                    </ErrorContainer>
                    <ButtonSendStyle>
                        <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {navigation.navigate("ResetPassword")}}>
                            <FontText color={"#B5C401"} size={30} italic Weight="bold">Continue</FontText>
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
            }}>ConfirmResetToken</Button> */}

        </Page>
    );
}

export default ConfirmResetToken;