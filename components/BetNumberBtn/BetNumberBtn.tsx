import React from 'react';
import { NumberBtnProps } from '../../types';
import FontText from '../FontText/FontText';
import { NumberBtn } from './style';

const BetNumberBtn = ({number,selected=false,color="green"}:NumberBtnProps & {color?:string}) => {
    return (
        <NumberBtn selected={selected} color="color" >
            <FontText color="white" Weight="bold" size={20}>
                {number <= 9? `0${number}`: number }
            </FontText>
        </NumberBtn>
    )
}

export default BetNumberBtn;