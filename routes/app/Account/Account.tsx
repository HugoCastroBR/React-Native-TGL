import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AuthInput from '../../../components/AuthInput/AuthInput';
import FontText from '../../../components/FontText/FontText';
import Page from './../../../components/Page/index';



const Account = () => {
    return (
        <Page header>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex:1,paddingBottom:100}}
            >

                <ScrollView contentContainerStyle={{ alignItems: 'center', height: 700, justifyContent: 'space-around', paddingBottom: 100 }}>
                    <FontText italic Weight="bold" color="#717171" size={36} >Account</FontText>
                    <AuthInput label="Name" type="username" value="HugoCastroBR" />
                    <AuthInput label="Phone Number" type="tel" />
                    <AuthInput label="Email" type="email" />
                    <AuthInput label="About" />
                    <AuthInput label="New Password" hidden type="password" />
                    <AuthInput label="Confirm New Password" hidden type="password" />
                </ScrollView>

            </KeyboardAvoidingView>

        </Page>
    );
}

export default Account;