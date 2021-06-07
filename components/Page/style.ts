import styled  from 'styled-components/native';

export const PageContentContainer = styled.ScrollView`
    background-color: ${props => props.theme.BgLight2};

    height: 2000px;
    
`

export const LoadingContainer = styled.View`

    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    opacity: 0.9;
    justify-content: center;
    align-items: center;
`