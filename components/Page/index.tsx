import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import { PageContentContainer } from './style';


const Page = ({
    children,
    navigation,
    header=false,
    footer=false
}
    :{
        children:React.ReactNode,
        navigation?:any
        header?: boolean
        footer?: boolean
    }) => {
    return(
        <View style={{flex: 1}} >
            {header && <Header navigation={navigation}/>}
            <PageContentContainer>
                {children}
            </PageContentContainer>
            {footer && <Footer/>}
        </View>
        
    )
}

export default Page;