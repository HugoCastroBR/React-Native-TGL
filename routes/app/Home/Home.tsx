import React, {  useLayoutEffect } from 'react';
import {  TouchableOpacity  } from 'react-native';
import FontText from '../../../components/FontText/FontText';
import Page from '../../../components/Page';
import RecentGameItem from '../../../components/recentGameItem';
import { HomeContainer, RecentGamesTitle, RecentGamesContainer,  FiltersContainer, FilterTitleContainer } from './style';
import FilterSelect from '../../../containers/filterSelect';
import { FetchUser } from '../../../store/FetchActions/FetchAuth';
import useTGL from './../../../hooks/useStore';
import useStartingLoad from './../../../hooks/useLoad';
import LoadingScreen from '../../../components/Loading';
import RetryLoading from '../../../components/Retry Load';
import { Ionicons } from '@expo/vector-icons';
import { getUserBets } from '../../../store/FetchActions/FetchBets';
import { ResetFilters } from '../../../store/actions';
import { SetRecentGames } from './../../../store/actions';
import { useEffect } from 'react';




const Home = () => {
    const {states,dispatch} = useTGL()

    const Load = () => {
        
        useStartingLoad('Home')
        dispatch(FetchUser())
        dispatch(getUserBets())
        
    }

    useLayoutEffect(() => {
        dispatch(ResetFilters())
        dispatch(SetRecentGames([]))
        Load()
    },[])

    useEffect(() => {
        dispatch(SetRecentGames([]))
    },[])

    





    const GenItems = () => {
        let toReturn;
        
        if(!states.Game.RecentGames.find(e => e.active === true)){
            toReturn = states.Game.RecentGames.map((element,index) => <RecentGameItem {...element} key={index}></RecentGameItem>)
        }else{
            toReturn = states.Game.RecentGames
                .filter(element => element.active)
                .map((element,index) => <RecentGameItem {...element} key={index}></RecentGameItem>)
                .reverse()
        }
        
        return toReturn
    }

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
                        <FilterTitleContainer>
                            <FontText size={20} italic  color="#707070">Filters: </FontText>
                        </FilterTitleContainer>
                        <FilterSelect />
                    </FiltersContainer>

                    
                </RecentGamesTitle>

                <RecentGamesContainer>
                    {/* For Recent Games make a Recent Game Item in page */}
                

                    {states.Game.RecentGames.length > 0 ? GenItems() : <FontText>No Recent Games</FontText>}
                    

                </RecentGamesContainer>

            </HomeContainer>

        </Page>
    );
}

export default Home;