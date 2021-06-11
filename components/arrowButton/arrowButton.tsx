import React from 'react';
import ArrowLeft from '../UI/icons/arrowLeft';
import ArrowRight from '../UI/icons/arrowRight';

import { ButtonStyle } from './style';







type SimpleButtonProps = {
    children?: React.ReactNode,
    Arrow?: boolean
    ArrowSize?: number[] // X , Y
    Color?: string
    FontSize?: number
    ReverseArrow?: boolean
    AuthTemplate?: boolean
    PressAction?: () => void
}

const SimpleButton = ({children = "",Arrow = false,
ArrowSize =[45,28] ,Color = "#707070", FontSize = 20,
ReverseArrow=false,  AuthTemplate = false, PressAction}
:SimpleButtonProps) => {
    return(
        ReverseArrow ? 
        <ButtonStyle FontSize={FontSize} LinkColor={Color} AuthTemplate={AuthTemplate}  onPress={() => {PressAction?.()}}>
            {Arrow && <ArrowLeft width={ArrowSize[0]} height={ArrowSize[1]} color={Color} />}
            {children} 
        </ButtonStyle>
        :
        <ButtonStyle FontSize={FontSize} LinkColor={Color} AuthTemplate={AuthTemplate}  onPress={() => {PressAction?.()}}>
            {children}
            {Arrow && <ArrowRight width={ArrowSize[0]} height={ArrowSize[1]} color={Color}/>}
        </ButtonStyle>
    )
}

export default SimpleButton;


