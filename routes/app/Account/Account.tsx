import React, { useCallback } from 'react';
import { useState, useLayoutEffect, useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontText from '../../../components/UI/FontText/FontText';
import useTGL from '../../../hooks/useStore';
import Page from '../../../components/UI/Page/index';
import { UpdateProfile } from './../../../store/FetchActions/FetchAuth';
import { SaveAccountInfosContainer } from './style';
import useStartingLoad from './../../../hooks/useLoad';
import { inputProps, UpdateInfos } from '../../../types';
import { AuthSetMessage } from './../../../store/actions';
import AccountInput from '../../../components/AccountInput/AccountInput';
import { ValidPassword } from '../../../functions/Validators/Auth';



const Account = () => {

    const { states, dispatch } = useTGL()

    
    const [username, setUsername] = useState(states.Auth.User.username)
    const [email, setEmail] = useState(states.Auth.User.email)
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [phone, setPhone] = useState(states.Auth.User.phone_number)
    const [about, setAbout] = useState(states.Auth.User.about !== null ? states.Auth.User.about : '')


    

    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const ValidAllInputs = () => {
        if(password !== ""){
            return ValidPassword(password,passwordConfirmation,setMessage)
        }else{
            return true
        }
    }

    useEffect(() => {
        ValidAllInputs()
    },[password,passwordConfirmation])

    useLayoutEffect(() => {
        dispatch(AuthSetMessage("", "green"))
    }, [])


    // Verify and Save New Account Details
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
        if(ValidAllInputs()){
            dispatch(UpdateProfile(infos))
            
        }else{
            setMessage("Invalid Inputs")
        }
        
    }

    const setMessage = useCallback((message = '', messageColor = 'red') => {
        dispatch(AuthSetMessage(message, messageColor))
    }, [states.Auth.message])

    //  Set Error Message

    const inputs: inputProps[] = [
        {
            onChangeText: setUsername,
            placeholder: "Username",
            value: username,
            hidden: false
        },{
            onChangeText: setEmail,
            placeholder: "Email",
            value: email,
            hidden: false
        },{
            onChangeText: setPhone,
            placeholder: "Phone Number",
            value: phone,
            hidden: false
        },{
            onChangeText: setAbout,
            placeholder: "About",
            value: about,
            hidden: false
        },{
            onChangeText: setPassword,
            placeholder: "New Password",
            value: password,
            hidden: true
        },{
            onChangeText: setPasswordConfirmation,
            placeholder: "Password Confirmation",
            value: passwordConfirmation,
            hidden: true
        }
    ]

    return (
        <Page header>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, paddingBottom: 140 }}
            >

                <ScrollView contentContainerStyle={{ alignItems: 'center', height: 700, justifyContent: 'space-around', paddingBottom: 100 }}>
                    <FontText italic Weight="bold" color="#717171" size={36} >Account</FontText>


                    {/*  Gen Inputs */}
                    {inputs.map((element, index) => (
                        <AccountInput {...element} key={index}/>
                    ))}


                    {/* <AccountInput setState={setUsername} /> */}
                    <FontText color={states.Auth.messageColor} font="Light" size={14}>{states.Auth.message}</FontText>

                    <SaveAccountInfosContainer onPress={() => {
                        FunctionSaveAccountDetails()
                        // 
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