import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';




const FontText = ({
    font='Medium',size=16,color='black',
    italic=false,
    children='',
    Weight='normal'
}:{
    font?:string, size?:number, color?:string,
    italic?: boolean, children?:React.ReactNode
    Weight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" 
}) => {

    

    

    const [loaded] = useFonts({
        HelveticaUltraLight: require('../../../assets/fonts/HelveticaNeue.ttf'),
        HelveticaThin: require('../../../assets/fonts/HelveticaNeueThin.ttf'),
        HelveticaLight: require('../../../assets/fonts/HelveticaNeueLight.ttf'),
        HelveticaMedium: require('../../../assets/fonts/HelveticaNeueMedium.ttf'),
        HelveticaBold: require('../../../assets/fonts/HelveticaNeueBold.ttf'),
        HelveticaHeavy: require('../../../assets/fonts/HelveticaNeueHv.ttf'),
        //  Italic
        HelveticaItalic: require('../../../assets/fonts/HelveticaNeueIt.ttf')
    })



    if (!loaded) {
        return null
    }

    return (
        <View>
            {
                italic?
                <Text style={{
                    fontFamily:`Helvetica${font}`,color:color,fontSize:size, fontStyle:'italic',fontWeight:Weight }}>
                    {children}
                </Text>:
                <Text style={{
                    fontFamily:`Helvetica${font}`,color:color,fontSize:size, fontStyle:'normal'}}>
                    {children}
                </Text>
            }
        </View>
    );
}

export default FontText;