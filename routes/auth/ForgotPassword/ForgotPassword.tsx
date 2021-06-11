import { useNavigation } from '@react-navigation/native';
import React, { useCallback,  useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import AuthFormTemplate from '../../../components/authFormTemplate';
import { ButtonSendStyle,  InputContainer,  } from '../../../components/authFormTemplate/style';
import AuthInput from '../../../components/AuthInput/AuthInput';
import FontText from '../../../components/UI/FontText/FontText';
import Page from '../../../components/UI/Page';
import RetryLoading from '../../../containers/Others/Retry Load';
import TglLogo from '../../../components/UI/TglLogo/TglLogo';
import { useSuccessLoad } from '../../../hooks/useLoad';
import useTGL from '../../../hooks/useStore';
import { AuthSetMessage, SetLoading } from '../../../store/actions';
import { AuthContainer, FormContainer, TitleContainer, LogoContainer, ErrorContainer } from '../Login/style';
import Footer from './../../../components/Partials/Footer/Footer';
import useStartingLoad from './../../../hooks/useLoad';
import { Ionicons } from '@expo/vector-icons';
import { tryResetPassword } from './../../../store/FetchActions/FetchAuth';
import { useEffect } from 'react';
import LoadingScreen from '../../../containers/Others/Loading';




const ForgotPassword = () => {

    const navigation = useNavigation()

    const [email,setEmail] = useState('')
    const { states,dispatch } = useTGL()

    useEffect(() => {
        dispatch(SetLoading(false))
        dispatch(AuthSetMessage('','green'))
    },[])

    const setMessage = useCallback((message='',messageColor='red') => {
        dispatch(AuthSetMessage(message,messageColor))
    },[states.Auth.message])


    const FunctionForgot = () => {
        if(validEmail(email)){
            useStartingLoad('ForgotPassword')
            dispatch(tryResetPassword(email))
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

    return (
        <Page>
            <LoadingScreen/>
            <RetryLoading>
                    <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={() => {
                        FunctionForgot()
                    }}>
                        <Ionicons name="reload-circle-outline" size={50} color="black" />
                    </TouchableOpacity>
            </RetryLoading>
            
            <AuthContainer >
                <FormContainer >
                <TitleContainer >
                    <LogoContainer >
                        <TglLogo size={1.8}/>
                    </LogoContainer>
                    <FontText italic Weight="bold" size={36} color="#707070">Forgot Password</FontText>
                </TitleContainer>
                <AuthFormTemplate >
                    <InputContainer>

                        <AuthInput label="Email" type="email" actionChange={setEmail}/>
                        

                    </InputContainer>
                    <ErrorContainer>
                        <FontText color={states.Auth.messageColor} font="Light" size={14 }>{states.Auth.message}</FontText>
                    </ErrorContainer>
                    <ButtonSendStyle>
                        <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {
                            FunctionForgot()
                        }}>
                            <FontText color={"#B5C401"} size={30} italic Weight="bold">Send</FontText>
                        </SimpleButton>
                    </ButtonSendStyle>
                </AuthFormTemplate>
                </FormContainer>
                <View style={{marginRight:36}}>
                    <SimpleButton Arrow={true} Color={"#707070"} ArrowSize={[50, 40]} AuthTemplate={true} ReverseArrow PressAction={() => {
                        navigation.navigate('Login')
                        useStartingLoad('App')
                        useSuccessLoad()
                    }}>
                        <FontText color={"#707070"} size={30} italic Weight="bold">Back</FontText>
                    </SimpleButton>
                </View>
                <View style={{alignItems:'center',width:'100%',marginTop: -50}}>
                    <Footer/>
                </View>
            </AuthContainer>



        </Page>
    );
}

export default ForgotPassword;