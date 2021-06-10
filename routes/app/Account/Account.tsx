import React from 'react';
import { useCallback, useRef, useEffect } from 'react';
import { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AuthInput from '../../../components/AuthInput/AuthInput';
import FontText from '../../../components/FontText/FontText';
import { useSuccessLoad } from '../../../hooks/useLoad';
import useTGL from '../../../hooks/useStore';

import api from '../../../services/api';
import { getStorage } from '../../../services/AsyncStorage';
import { AuthSetMessage } from '../../../store/actions';
import Page from './../../../components/Page/index';
import { getUserInfos, UpdateProfile, FetchUser } from './../../../store/FetchActions/FetchAuth';
import { SaveAccountInfosContainer } from './style';
import useStartingLoad from './../../../hooks/useLoad';
import { UpdateInfos } from '../../../types';
import { TextInput } from 'react-native-paper';



const Account = () => {





    const { states, dispatch } = useTGL()


    const setMessage = useCallback((message = '', messageColor = 'red') => {
        dispatch(AuthSetMessage(message, messageColor))
    }, [states.Auth.message])



    const ValidAllInputs = () => {
        if (ValidUsername(username) && validEmail(email)) {
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


    type UserRes = {
        id: number
        username: string
        email: string
        phone_number: string
        about: string
    }

    const [userInfos, SetUserInfos] = useState({} as UserRes)





    useLayoutEffect(() => {
        console.log(states.Auth.User)

    }, [])



    const SetMessage = (msg: string, color = "red") => {
        dispatch(AuthSetMessage(msg, color))
    }


    const FunctionSaveAccountDetails = () => {
        console.log('ue')
        console.log('vish')
        useStartingLoad('Account')
        const infos: UpdateInfos = {
            about,
            email,
            password,
            password_confirmation: passwordConfirmation,
            phone_number: phone,
            username
        }
        console.log(infos)
        dispatch(UpdateProfile(infos))
    }


    let issoEOTexto = userInfos.username

    const TextHandler = (T: string) => {
        console.log(T)
        issoEOTexto = T
        console.log(T)
        console.log(states.Auth.User.username)
    }

    const [username, setUsername] = useState(states.Auth.User.username)
    const [email, setEmail] = useState(states.Auth.User.email)
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [phone, setPhone] = useState(states.Auth.User.phone_number)
    const [about, setAbout] = useState(states.Auth.User.about !== null ? states.Auth.User.about : '')



    return (
        <Page header>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, paddingBottom: 100 }}
            >

                <ScrollView contentContainerStyle={{ alignItems: 'center', height: 700, justifyContent: 'space-around', paddingBottom: 100 }}>
                    <FontText italic Weight="bold" color="#717171" size={36} >Account</FontText>



                    <TextInput
                        style={{ width: 320, height: 70, backgroundColor: 'white' }}
                        onChangeText={(text) => {
                            setUsername(text)
                        }}
                        value={username}
                        placeholder="Username"
                    />

                    <TextInput
                        style={{ width: 320, height: 70, backgroundColor: 'white' }}
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                        value={email}
                        placeholder="Email"
                    />


                    <TextInput
                        style={{ width: 320, height: 70, backgroundColor: 'white' }}
                        onChangeText={(text) => {
                            setAbout(text)
                        }}
                        value={about}
                        placeholder="About"
                    />


                    <TextInput
                        style={{ width: 320, height: 70, backgroundColor: 'white' }}
                        onChangeText={(text) => {
                            setPhone(text)
                            console.log(phone)
                        }}
                        value={phone}
                        placeholder="Phone Number"
                    />


                    <TextInput
                        style={{ width: 320, height: 70, backgroundColor: 'white' }}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        value={password}
                        placeholder="Password"
                    />

                    <TextInput
                        style={{ width: 320, height: 70, backgroundColor: 'white' }}
                        onChangeText={(text) => {
                            setPasswordConfirmation(text)
                        }}
                        value={passwordConfirmation}
                        placeholder="Password Confirmation"
                    />

                    {/* <AccountInput setState={setUsername} /> */}
                    <FontText color={states.Auth.messageColor} font="Light" size={14}>{states.Auth.message}</FontText>

                    <SaveAccountInfosContainer onPress={() => {
                        FunctionSaveAccountDetails()
                        // console.log(username)
                    }}>
                        <FontText Weight="bold" size={30} color="#717171">
                            Save
                        </FontText>
                    </SaveAccountInfosContainer>

                </ScrollView>

            </KeyboardAvoidingView>

        </Page>
    );
}

export default Account;