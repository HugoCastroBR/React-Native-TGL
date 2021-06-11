import React from 'react';
import { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontText from '../../../components/FontText/FontText';
import useTGL from '../../../hooks/useStore';
import Page from './../../../components/Page/index';
import { UpdateProfile } from './../../../store/FetchActions/FetchAuth';
import { SaveAccountInfosContainer } from './style';
import useStartingLoad from './../../../hooks/useLoad';
import { UpdateInfos } from '../../../types';
import { TextInput } from 'react-native-paper';
import { AuthSetMessage } from './../../../store/actions';



const Account = () => {





    const { states, dispatch } = useTGL()








    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    useLayoutEffect(() => {

        dispatch(AuthSetMessage("","green"))
    }, [])




    const FunctionSaveAccountDetails = () => {

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
                style={{ flex: 1, paddingBottom: 140 }}
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