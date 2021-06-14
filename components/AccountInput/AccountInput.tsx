import React from 'react';
import { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { inputProps } from '../../types';
import {AccountInputStyle} from './style';



const AccountInput = (Props:inputProps) => {

    const [hiddenState, setHiddenState] = useState(true)

    if(Props.hidden){
        return(
            <AccountInputStyle
            onChangeText={Props.onChangeText}
            value={Props.value}
            placeholder={Props.placeholder}
            secureTextEntry={hiddenState}
            right={<AccountInputStyle.Icon onPress={() => setHiddenState(!hiddenState)} name="eye" />}
        />
        )
    }
    return(
        <AccountInputStyle
        onChangeText={Props.onChangeText}
        value={Props.value}
        placeholder={Props.placeholder}
    />
    )
}

export default AccountInput;