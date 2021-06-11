import React from "react";
import { View } from "react-native";
import { SetModalVisibility } from "../../../store/actions";
import FontText from "../../../components/UI/FontText/FontText";
import { ModalContainer, ModalContent, ToggleModal } from "./style";
import useTGL from '../../../hooks/useStore';



const Modal = () => {
    const { states, dispatch } = useTGL()

    if (states.App.isModalVisible) {
        return (
            <ModalContainer >
                <ModalContent>
                    <FontText color="#666" italic Weight="bold" size={20}>
                        {states.Game.CartErrorMsg.msg}
                    </FontText>
                    <ToggleModal onPress={() => {
                        dispatch(SetModalVisibility(false))
                    }}>
                        <FontText color="white" italic Weight="bold" size={20}>
                            Ok
                    </FontText>
                    </ToggleModal>
                </ModalContent>
            </ModalContainer>
        )
    } else {
        return (
            <View>

            </View>
        )
    }


}

export default Modal;