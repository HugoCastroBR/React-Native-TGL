import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Partials/Header/Header';


const Page = ({
    children,
    navigation,
    header=true,
    footer=true
}
    :{
        children:React.ReactNode,
        navigation?:any
        header?: boolean
        footer?: boolean
    }) => {
    return(
        <View style={{flex: 1}} >
            <Header navigation={navigation}/>
            <ScrollView style={{paddingTop:0,backgroundColor:'red',height:"200%"}}>
                <View style={{paddingTop:0,backgroundColor:'green',height:700}}></View>
                {children}
            </ScrollView>
        </View>
        
    )
}

export default Page;