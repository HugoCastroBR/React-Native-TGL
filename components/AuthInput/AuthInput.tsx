import React, { useState } from 'react';
import { SetStateAction } from 'react';
import { useRef } from 'react';
import { AuthInputType } from '../../types';
import { AuthInputStyle } from './style';





const AuthInput = (
    {
        hidden=false,
        label="",
        type="username",
        actionChange
    }
    :
    AuthInputType & {actionChange?:React.Dispatch<SetStateAction<string>>}
    ) => {



    const [hiddenState, setHiddenState] = useState(true)

    return (
        <AuthInputStyle
            label={label}
            autoCompleteType={type}
            secureTextEntry={hiddenState}
            selectionColor="#9D9D9D"
            underlineColor="#9D9D9D"
            outlineColor="#9D9D9D"
            right={hidden && <AuthInputStyle.Icon onPress={() => setHiddenState(!hiddenState)} name="eye" />}
            onChangeText={(event) =>  actionChange?.(event)}
        />
    )
}

export default AuthInput;