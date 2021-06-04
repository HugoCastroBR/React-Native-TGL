import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Circle, Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';



const Accounticon = ({color="#C1C1C1"}:{color?:string}) => {

    const navigation = useNavigation()

    const size = 26
    return (
        <View style={{ width: size, height: size }} >
            <Svg  id="Capa_1"  x="0px" y="0px" fill={color}
                viewBox="0 0 419.617 419.617"  >
                <G>
                    <G>
                        <Path d="M48.592,402.617c0,9.35,7.65,17,17,17h288.433c9.35,0,17-7.65,17-17c0-94.067-42.5-174.817-102.283-207.117
			c28.9-18.983,47.883-51.85,47.883-88.967C316.625,47.883,268.742,0,210.092,0S103.275,47.6,103.275,106.533
			c0,37.117,18.983,69.7,47.883,88.967C91.092,227.8,48.592,308.55,48.592,402.617z M209.808,34
			c39.95,0,72.533,32.583,72.533,72.533s-32.583,72.533-72.533,72.533s-72.533-32.583-72.533-72.533S169.858,34,209.808,34z
			 M209.808,213.917c66.3,0,120.7,75.65,126.65,171.7h-253.3C89.108,289.567,143.508,213.917,209.808,213.917z"/>
                    </G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
                <G>
                </G>
            </Svg>
        </View>


    )
}


export default Accounticon;