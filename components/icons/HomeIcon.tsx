import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Circle, Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import useTGL from '../../hooks/useStore';
import { FetchUser } from '../../store/FetchActions/FetchAuth';
import { getUserBets } from '../../store/FetchActions/FetchBets';
import { SetNextPage } from '../../store/actions';



const HomeIcon = ({color="#C1C1C1"}:{color?:string}) => {

    const navigation = useNavigation()
    const {states,dispatch} = useTGL()

    const size = 34
    return (
        <View style={{ width: size, height: size }} >
            <Svg viewBox="0 0 64 64" fill={color} onPress={() => 
                        {
                        
                        dispatch(SetNextPage('Home'))
                        dispatch(FetchUser())
                        dispatch(getUserBets())
                        navigation.navigate('Home')

                        }
                }>
                <G id="Layer_38" data-name="Layer 38">
                    <Path d="M53.09,30.82A1.5,1.5,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.59,1.59,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35H52A1.48,1.48,0,0,0,53.09,30.82Zm-14,19.68V38.06a1.5,1.5,0,0,0-1.5-1.5H26.45a1.5,1.5,0,0,0-1.5,1.5V50.5H17.84V29.85A1.57,1.57,0,0,0,16,28.35l1.38-1.23h0L32,14,46.66,27.12h0L48,28.35a1.58,1.58,0,0,0-1.88,1.51V50.5Z" />
                </G>
            </Svg>
        </View>


    )
}


export default HomeIcon;