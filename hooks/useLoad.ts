
import { SetNextPage, SetLoading, SetGlobalError, AuthLogin, SetLoadingSuccess } from '../store/actions';
import useTGL from './useStore';
import store, { RootState } from '../store';
const dispatch = store.dispatch

export default function useStartingLoad(redirect: string){
    
    dispatch(SetNextPage(redirect))
    dispatch(SetLoading(true))
    dispatch(SetGlobalError(false))
}

export function useSuccessLoad(){
    
	dispatch(SetLoadingSuccess(true))
	dispatch(SetLoading(false))
    
}

export function useErrorLoad() {
    
    dispatch(SetLoading(false))
}

export function useGlobalErrorLoad(){
    
    dispatch(SetLoading(false))
    dispatch(SetGlobalError(true))
}

