import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import AuthFormTemplate from '../../../components/authFormTemplate';
import { ButtonSendStyle, ForgetPasswordContainer, InputContainer } from '../../../components/authFormTemplate/style';
import AuthInput from '../../../components/AuthInput/AuthInput';
import FontText from '../../../components/UI/FontText/FontText';
import Page from '../../../components/UI/Page';
import TglLogo from '../../../components/UI/TglLogo/TglLogo';
import { AuthContainer, ErrorContainer, FormContainer, LogoContainer, TitleContainer } from './style';
import Footer from './../../../components/Partials/Footer/Footer';
import SplashImage from '../../../components/UI/Splash/Splash';
import useTGL from './../../../hooks/useStore';
import { AuthSetMessage, SetLoading } from './../../../store/actions';
import { useCallback } from 'react';
import { tryAuth } from '../../../store/FetchActions/FetchAuth';
import LoadingScreen from '../../../containers/Others/Loading';
import RetryLoading from '../../../containers/Others/Retry Load';
import { Ionicons } from '@expo/vector-icons';
import useStartingLoad from './../../../hooks/useLoad';
import { validEmail } from '../../../functions/Validators/Auth';




const Login = () => {

    const navigation = useNavigation()

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')


    const {states, dispatch} = useTGL() 


    const setMessage = useCallback((message='',messageColor='red') => {
        dispatch(AuthSetMessage(message,messageColor))

    },[states.Auth.message])

    useEffect(() => {
        
        // eslint-disable-next-line no-empty
        if(email == '' && password == ''){
            
        }else{
            ValidAllInputs()
        }
    },[email,password])


    useLayoutEffect(() => {
        
        dispatch(SetLoading(false))
        
        dispatch(AuthSetMessage('','green'))
    },[])

    useEffect(() =>  setMessage(),[])

    

    const FunctionLogin = () => {
        if(ValidAllInputs()){


                useStartingLoad('App')
                
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

            <LoadingScreen  />
            <RetryLoading>
                    <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={() => {
                        FunctionLogin()
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
                    <FontText italic Weight="bold" size={36} color="#707070">Authentication</FontText>
                </TitleContainer>
                <AuthFormTemplate  >
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