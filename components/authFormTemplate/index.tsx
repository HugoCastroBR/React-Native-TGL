import React from 'react';
import { AuthInputType } from '../../types';

import { AuthFormTemplateStyle } from './style';
import AuthInput from './../AuthInput/AuthInput';
import TglLogo from '../TglLogo/TglLogo';



const AuthFormTemplate = ({
    children = "",
    name="",


    }:{
    children?: React.ReactNode
    name?: string

    }) => {

    
    return (
        // Remove action to auth
        <AuthFormTemplateStyle >
                
                {children}
        </AuthFormTemplateStyle>
    )
}

export default AuthFormTemplate;