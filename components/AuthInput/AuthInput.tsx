import React, { useState } from 'react';
import { SetStateAction } from 'react';
import { useRef } from 'react';
import { AuthInputType } from '../../types';
import { AuthInputStyle } from './style';





const AuthInput = (
    {
        hidden,
        label="",
        type="username",
        value="",
        actionChange
    }
    :
    AuthInputType & {actionChange?:React.Dispatch<SetStateAction<string>>}
    ) => {



    const [hiddenState, setHiddenState] = useState(hidden)
    const [valueState, setValueState] = useState(value)

    return (
        <AuthInputStyle
            label={label}
            autoCompleteType={type}
            secureTextEntry={hiddenState}
            selectionColor="#9D9D9D"
            underlineColor="#9D9D9D"
            outlineColor="#9D9D9D"
            right={hidden && <AuthInputStyle.Icon onPress={() => setHiddenState(!hiddenState)} name="eye" />}
            onChangeText={(event) =>  {
                setValueState(event)
                actionChange?.(event)
            }}
            value={valueState}
        />
    )
}

export default AuthInput;