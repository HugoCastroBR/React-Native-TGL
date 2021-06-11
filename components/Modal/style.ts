import styled  from 'styled-components/native';



export const ModalContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.8);
    left: 0;
    z-index: 100;

`

export const ModalContent = styled.View`
    width: 80%;
    height: 20%;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-width: 1px;
    border-radius: 6px;
    border-color: #cccccc;
    padding: 20px;
`

export const ToggleModal = styled.TouchableOpacity`
    width: 50%;
    height: 26%;
    background-color: ${props => props.theme.DefaultHighLight};
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`