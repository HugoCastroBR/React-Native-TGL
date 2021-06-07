import React from 'react';
import { Button, View } from 'react-native';
import FontText from '../../../components/FontText/FontText';
import { Link, useNavigation } from '@react-navigation/native';
import Page from '../../../components/Page';
import NewBetIcon from '../../../components/icons/newBetIcon';
import RecentGameItem from '../../../components/recentGameItem';
import SimpleButton from '../../../components/arrowButton/arrowButton';
import { HomeContainer, RecentGamesTitle, RecentGamesContainer, EmptyRecentGames, FiltersContainer, FilterTitleContainer } from './style';
import FilterSelect from '../../../containers/filterSelect';




const Home = () => {
    const navigation = useNavigation()
    return (
        <Page header>
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
                
                    

                </RecentGamesContainer>

            </HomeContainer>

        </Page>
    );
}

export default Home;