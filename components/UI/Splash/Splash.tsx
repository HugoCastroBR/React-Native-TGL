import React, { useRef, useEffect, useState } from 'react'
import { Container, Splash } from './style'
import { Animated } from 'react-native'


const  SplashImage = () => {



    const [hideSplash, setHideSplash] = useState(false)
    const scrollAnimation = useRef(new Animated.Value(1000)).current;
    
    const goTop = () => {
        Animated.timing(scrollAnimation, {
            useNativeDriver: true,
            toValue: -1000,
            duration: 1200
        }).start();
    }

    const goCenter = () => {
        Animated.timing(scrollAnimation, {
            useNativeDriver: true,
            toValue: 0,
            duration: 1500
        }).start();
    }

    useEffect(() => {
        goCenter()
        setTimeout(() => {
            goTop()
        }, 2400)
        setTimeout(() => {
            setHideSplash(true)
        }, 4000)

    }, [scrollAnimation])

    let ScreenComponent: JSX.Element | null = (
        <Container transparent>
            <Animated.View style={{
                transform: [{ translateY: scrollAnimation }],
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <Splash source={require('../../../assets/img/splashImg.png')} />
            </Animated.View>
        </Container>
    )
    hideSplash && (ScreenComponent = null)
    return (
        <>{ScreenComponent}</>
    )
}

export default SplashImage;