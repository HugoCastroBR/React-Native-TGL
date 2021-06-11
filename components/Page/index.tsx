import React from 'react';
import {  View } from 'react-native';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import { PageContentContainer } from './style';
import Modal from '../Modal/Modal';

const Page = ({
    children,
    navigation,
    header=false,
    footer=false,
}
    :{
        children:React.ReactNode,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigation?:any
        header?: boolean
        footer?: boolean
    }) => {



    return(
        <View style={{flex: 1}} >
            <Modal/>

                {header && <Header navigation={navigation}/>}
            <PageContentContainer>
                
                <View style={{flex: 1}}>
                {children}
                </View>
                {footer && <Footer/>}
            </PageContentContainer>
            
        </View>
        
    )
}

export default Page;