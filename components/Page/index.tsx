import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import { LoadingContainer, PageContentContainer } from './style';
import { ActivityIndicator } from 'react-native'

const Page = ({
    children,
    navigation,
    header=false,
    footer=false,
    nav
}
    :{
        children:React.ReactNode,
        navigation?:any
        header?: boolean
        footer?: boolean
        nav?: JSX.Element
    }) => {
    return(
        <View style={{flex: 1}} >

                {/* <LoadingContainer>
                    <ActivityIndicator size={110} color='#B5C401' />
                </LoadingContainer> */}

                
                {header && <Header navigation={navigation}/>}
                {/* {nav && nav} */}

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