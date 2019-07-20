import { LOADING, LOGGED_IN, LOGGED_OUT } from './login-constants';
import { ILoginAction } from './login-action';


const initialState = {
    loading: false,
    username: '',
    loggedIn: false

}
interface ILoginState {
    loading: boolean,
    username: string,
    loggedIn: boolean
}
export const loginReducer = (state: ILoginState = initialState, action: ILoginAction) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                LOADING: true
            }
        }
        case LOGGED_IN: {
            return {
                ...state,
                loading: false,
                username: action.payload as string,
                loggedIn: true
            }
        }
        case LOGGED_OUT: {
            return {
                ...state,
                loading: false,
                username: '',
                loggedIn: false
            }
        }
        default: {
            return state
        }
    }
}