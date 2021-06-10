import React, { useEffect, useLayoutEffect } from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import FontText from '../../../components/FontText/FontText';
import { Link, useNavigation } from '@react-navigation/native';
import Page from '../../../components/Page';
import NewBetIcon from '../../../components/icons/newBetIcon';
import RecentGameItem from '../../../components/recentGameItem';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import { HomeContainer, RecentGamesTitle, RecentGamesContainer, EmptyRecentGames, FiltersContainer, FilterTitleContainer } from './style';
import FilterSelect from '../../../containers/filterSelect';
import { FetchUser } from '../../../store/FetchActions/FetchAuth';
import useTGL from './../../../hooks/useStore';
import useStartingLoad from './../../../hooks/useLoad';
import LoadingScreen from '../../../components/Loading';
import RetryLoading from '../../../components/Retry Load';
import { Ionicons } from '@expo/vector-icons';
import { getUserBets } from '../../../store/FetchActions/FetchBets';




const Home = () => {
    const navigation = useNavigation()
    const {states,dispatch} = useTGL()

    const Load = () => {
        useStartingLoad('Home')
        dispatch(FetchUser())
        dispatch(getUserBets())
    }

    useEffect(() => {
        Load()
    },[])

    return (
        <Page header>
            <LoadingScreen/>
            
            <RetryLoading>
                    <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={() => {
                        Load()
                    }}>
                        <Ionicons name="reload-circle-outline" size={50} color="black" />
                    </TouchableOpacity>
            </RetryLoading>

            <HomeContainer>

                <RecentGamesTitle>
                    <FiltersContainer>
                        <FontText size={30} italic Weight="bold" color="#707070">Recent Games</FontText>
                        {/* <span>{states.Game.RecentGames.length > 0 && "Filters"}</span> */}
                        <FilterTitleContainer>
                            <FontText size={20} italic  color="#707070">Filters: </FontText>
                        </FilterTitleContainer>
                        <FilterSelect />
                    </FiltersContainer>

                    
                </RecentGamesTitle>

                <RecentGamesContainer>
                    {/* For Recent Games make a Recent Game Item in page */}
                    {/* {states.Game.RecentGames.length > 0 ? GenItems() : <EmptyRecentGames>No Recent games</EmptyRecentGames>} */}
                    <RecentGameItem color="blue" data="1/2/2003" numbers={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} price={1.2} type="LotoEz" active={false}  />
                    <RecentGameItem color="red" data="1/2/2003" numbers={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} price={1.2} type="LotoEz" active={false}  />
                    
                    {states.Game.RecentGames.map((element,index) => <RecentGameItem key={index} {...element} />)}
                    

                </RecentGamesContainer>

            </HomeContainer>

        </Page>
    );
}

export default Home;