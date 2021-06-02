import React from "react"
import { View } from "react-native"
import FontText from "../../../components/FontText/FontText"
import LogoutIcon from "../../../components/icons/logout"
import { HeaderButtonsContainer } from "./style"


const Header = () => {
    return (
        <View>
            <View style={{ backgroundColor: 'green' }}>
                <FontText>
                    TGL
                </FontText>
            </View>
            <HeaderButtonsContainer >
                <LogoutIcon />
            </HeaderButtonsContainer>
        </View>
    )
}