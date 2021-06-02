import React from 'react';
import { Button, Text, View } from 'react-native';


const Page = ({
    children,
    navigation
}
    :{
        children:React.ReactNode,
        navigation?:any

    }) => {
    return(
        <View style={{marginTop:100}}>
            <View>
                <Text>Header</Text>
                {navigation&&<Button title="teste" onPress={() => {navigation?.openDrawer()}} />}
            </View>
            {children}
        </View>
    )
}

export default Page;