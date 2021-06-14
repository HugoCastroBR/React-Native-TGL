import React, {  useLayoutEffect } from 'react';
import {  TouchableOpacity, View  } from 'react-native';
import FontText from '../../../components/UI/FontText/FontText';
import Page from '../../../components/UI/Page';
import RecentGameItem from '../../../components/recentGameItem';
import { HomeContainer, RecentGamesTitle, RecentGamesContainer,  FiltersContainer, FilterTitleContainer } from './style';
import FilterSelect from '../../../containers/home/filterSelect';
import { FetchUser } from '../../../store/FetchActions/FetchAuth';
import useTGL from './../../../hooks/useStore';
import useStartingLoad from './../../../hooks/useLoad';
import LoadingScreen from '../../../containers/Others/Loading';
import RetryLoading from '../../../containers/Others/Retry Load';
import { Ionicons } from '@expo/vector-icons';
import { getUserBets } from '../../../store/FetchActions/FetchBets';
import { ResetFilters } from '../../../store/actions';





const Home = () => {
    const {states,dispatch} = useTGL()

    const Load = () => {
        useStartingLoad('Home')
        dispatch(FetchUser())
        dispatch(getUserBets())
    }

    useLayoutEffect(() => {
        dispatch(ResetFilters())
        Load()
    },[])

    // useEffect(() => {
    //     dispatch(SetRecentGames([]))
    // },[])


    // Gen Recent Games Item
    const GenItems = () => {
        let toReturn;
        
        //  if is not Recent Games active return all
        if(!states.Game.RecentGames.find(e => e.active === true)){
            toReturn = states.Game.RecentGames.map((element,index) => <RecentGameItem {...element} key={index}></RecentGameItem>)
        }else{
            // If find a recent game active return just the games with active
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
                            {
                                states.Game.RecentGames.length > 0 && <FontText size={20} italic  color="#707070">Filters: </FontText>
                            }
                        </FilterTitleContainer>
                        <FilterSelect />
                    </FiltersContainer>

                    
                </RecentGamesTitle>

                <RecentGamesContainer>
                    {/* For Recent Games make a Recent Game Item in page */}
                

                    {states.Game.RecentGames.length > 0 ? GenItems() : 
                    <View style={{marginLeft:12}}>
                        <FontText italic Weight="bold" size={22} color="#555">No Recent Games</FontText>
                    </View>}
                    

                </RecentGamesContainer>

            </HomeContainer>

        </Page>
    );
}

export default Home;