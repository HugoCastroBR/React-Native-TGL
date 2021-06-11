import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import AuthFormTemplate from '../../../components/authFormTemplate';
import { ButtonSendStyle, InputContainer } from '../../../components/authFormTemplate/style';
import AuthInput from '../../../components/AuthInput/AuthInput';
import FontText from '../../../components/UI/FontText/FontText';
import LoadingScreen from '../../../containers/Others/Loading';
import Page from '../../../components/UI/Page';
import RetryLoading from '../../../containers/Others/Retry Load';
import TglLogo from '../../../components/UI/TglLogo/TglLogo';
import useTGL from '../../../hooks/useStore';
import { AuthSetMessage, SetLoading, SetNextPage } from '../../../store/actions';
import { tryRegister } from '../../../store/FetchActions/FetchAuth';
import { AuthContainer, FormContainer, TitleContainer, LogoContainer, ErrorContainer } from '../Login/style';
import Footer from './../../../components/Partials/Footer/Footer';
import { Ionicons } from '@expo/vector-icons';
import useStartingLoad from './../../../hooks/useLoad';
import { useLayoutEffect } from 'react';



const Register = () => {

    const navigation = useNavigation()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')


    useEffect(() => {
        dispatch(AuthSetMessage('', 'green'))
        dispatch(SetLoading(false))
        dispatch(SetNextPage('App'))
    }, [])

    useEffect(() => setMessage("a"), [])

    const { states, dispatch } = useTGL()


    const setMessage = useCallback((message = '', messageColor = 'red') => {
        dispatch(AuthSetMessage(message, messageColor))
    }, [states.Auth.message])


    useEffect(() => {
        ValidAllInputs()

    }, [username, email, password, passwordConfirmation])


    useLayoutEffect(() => {
        dispatch(AuthSetMessage('', 'green'))
    }, [])

    const FunctionRegister = () => {


        if (ValidAllInputs()) {
            if (username && passwordConfirmation &&
                password && email) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const user: { name: string, password: string, email: string } = {
                    name: username,
                    password: password,
                    email: email
                }

                useStartingLoad('Login')
                dispatch(tryRegister(username, email, password, passwordConfirmation))

                setMessage('', "green")


            }
        }
    }
    const ValidAllInputs = () => {
        if (ValidUsername(username) && ValidPassword(password, passwordConfirmation) && validEmail(email)) {
            setMessage('')
            return true
        }
    }

    const ValidUsername = (username: string) => {
        if (username) {
            if (username.length >= 2) {
                setMessage('')
                return username
            } else {
                setMessage('The username has to be up to 2 characters')
                return false
            }

        } else {
            setMessage('The username field have to be filled')
            return false
        }
    }

    const ValidPassword = (password: string, Cpassword: string) => {
        if (password) {
            if (password) {
                if (Cpassword) {
                    if (Cpassword === password) {
                        setMessage('')
                        return password
                    } else {
                        setMessage('The passwords are not equal')
                    }

                } else {
                    setMessage('The password confirmation has to be filled')
                }

            } else {
                setMessage('The password has to be up to 6 characters')
                return false
            }

        } else {
            setMessage('The password field have to be filled')
            return false
        }
    }

    const validEmail = (email: string) => {
        if (email) {
            if (/^[^@]+@\w+(\.\w+)+\w$/.test(email)) {
                setMessage('')
                return true
            } else {
                setMessage('Invalid Email')
                return false
            }

        } else {
            setMessage('The Email field have to be filled')
            return false
        }
    }


    return (
        <Page>


            <LoadingScreen />
            <RetryLoading>
                <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={() => {
                    FunctionRegister()
                }}>
                    <Ionicons name="reload-circle-outline" size={50} color="black" />
                </TouchableOpacity>
            </RetryLoading>

            <AuthContainer >
                <FormContainer >
                    <TitleContainer >
                        <LogoContainer >
                            <TglLogo size={1.8} />
                        </LogoContainer>
                        <FontText italic Weight="bold" size={36} color="#707070">Register</FontText>
                    </TitleContainer>
                    <AuthFormTemplate  >
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={{ flex: 1, paddingBottom: 20 }}
                        >
                            <InputContainer>

                                <AuthInput label="Name" type="name" actionChange={setUsername} />
                                <AuthInput label="Email" type="email" actionChange={setEmail} />
                                <AuthInput hidden label="Password" type="password" actionChange={setPassword} />
                                <AuthInput hidden label="Confirm Password" type="password" actionChange={setPasswordConfirmation} />

                            </InputContainer>
                        </KeyboardAvoidingView>

                        <ErrorContainer>
                            <FontText color={states.Auth.messageColor} font="Light" size={14}>{states.Auth.message}</FontText>
                        </ErrorContainer>
                        <ButtonSendStyle>
                            <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true} PressAction={() => {
                                FunctionRegister()
                            }}>
                                <FontText color={"#B5C401"} size={30} italic Weight="bold">Save</FontText>
                            </SimpleButton>
                        </ButtonSendStyle>
                    </AuthFormTemplate>
                </FormContainer>
                <View style={{ marginRight: 36 }}>
                    <SimpleButton Arrow={true} Color={"#707070"} ArrowSize={[50, 40]} AuthTemplate={true} ReverseArrow PressAction={() => { navigation.navigate("Login") }}>
                        <FontText color={"#707070"} size={30} italic Weight="bold">Back</FontText>
                    </SimpleButton>
                </View>
                <View style={{ alignItems: 'center', width: '100%', marginTop: -50 }}>
                    <Footer />
                </View>
            </AuthContainer>

            {/* <Button style={{marginTop: 100}} onPress={() => {
                navitgation.navigate('App')
            }}>Register</Button> */}

        </Page>
    );
}

export default Register;