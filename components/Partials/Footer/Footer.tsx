import React from 'react';
import FontText from '../../FontText/FontText';
import { FooterContainer } from './style';


const Footer = () => {
    return(
        <FooterContainer>
            <FontText color="#707070" size={16}>
                Copyright 2021 Luby Software
            </FontText>
        </FooterContainer>
    )
}

export default Footer;