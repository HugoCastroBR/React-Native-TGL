import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';



const CartIcon = ({ navigation }: { navigation?: any }) => {

    // onPress={() => {
    //     navigation?.openDrawer()
    // }}

    const size = 34
    return (
        <View style={{ width: size, height: size, marginRight:32, marginTop: -6 }} >
            <Svg  id="Layer_1" x="0px" y="0px"
                    onPress={() => {
                        navigation?.openDrawer()
                    }}
                width={`${size}px`} height={`${size}px`} viewBox="0 0 95 92" enable-background="new 0 0 92 92" color="#B5C401" fill="#B5C401" >
                <Path id="XMLID_1732_" d="M91.8,27.3L81.1,61c-0.8,2.4-2.9,4-5.4,4H34.4c-2.4,0-4.7-1.5-5.5-3.7L13.1,19H4c-2.2,0-4-1.8-4-4
	s1.8-4,4-4h11.9c1.7,0,3.2,1.1,3.8,2.7L36,57h38l8.5-27H35.4c-2.2,0-4-1.8-4-4s1.8-4,4-4H88c1.3,0,2.5,0.7,3.2,1.7
	C92,24.7,92.2,26.1,91.8,27.3z M36.4,70.3c-1.7,0-3.4,0.7-4.6,1.9c-1.2,1.2-1.9,2.9-1.9,4.6c0,1.7,0.7,3.4,1.9,4.6
	c1.2,1.2,2.9,1.9,4.6,1.9s3.4-0.7,4.6-1.9c1.2-1.2,1.9-2.9,1.9-4.6c0-1.7-0.7-3.4-1.9-4.6C39.8,71,38.1,70.3,36.4,70.3z M72.3,70.3
	c-1.7,0-3.4,0.7-4.6,1.9s-1.9,2.9-1.9,4.6c0,1.7,0.7,3.4,1.9,4.6c1.2,1.2,2.9,1.9,4.6,1.9c1.7,0,3.4-0.7,4.6-1.9
	c1.2-1.2,1.9-2.9,1.9-4.6c0-1.7-0.7-3.4-1.9-4.6S74,70.3,72.3,70.3z"/>
            </Svg>
        </View>


    )
}


export default CartIcon;