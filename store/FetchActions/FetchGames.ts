import api from '../../services/api';
import { getStorage } from '../../services/AsyncStorage';
import { SetGamesData } from '../actions';

export const getGames = () => {
    


    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (dispatch:any) => {
        getStorage("token").then((token) => {
            api.defaults.headers.Authorization = `Bearer ${token}`
        
            const config = {
                headers: { Authorization: `Bearer ${token}`}
            }
    
            api
                .get('/games', config)
                .then(res =>  {
                    dispatch(SetGamesData(res.data))
                })
                .catch(console.log)
        })
    }
} 