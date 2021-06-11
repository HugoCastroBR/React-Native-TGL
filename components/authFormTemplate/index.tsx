import React from 'react';
import { AuthFormTemplateStyle } from './style';




const AuthFormTemplate = ({
    children = "",

    }:{
    children?: React.ReactNode
    }) => {

    
    return (
        // Remove action to auth
        <AuthFormTemplateStyle >
                
                {children}
        </AuthFormTemplateStyle>
    )
}

export default AuthFormTemplate;