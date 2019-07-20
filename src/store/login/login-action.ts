
import { LOGGED_IN, LOADING, LOGGED_OUT } from './login-constants';
import { Dispatch } from 'redux';

export interface ILoginAction {
    type: string,
    payload: string | undefined
}
/**
 * Simulates a login
 * @param username the username
 * @param _password the password
 */
export const login = (username: string, _password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(loggedIn(username))
        }, 2000)
    }
}

/**
 * Logouts the user
 */
export const logout = () => {
    return (dispatch: Dispatch) => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(loggedOut())
        }, 2000)
    }
}

/**
 * To show that the login is in process
 */
const loading = () => {
    return {
        type: LOADING
    }
}

/**
 * Logged in payload
 * @param username the username
 */
const loggedIn = (username: string) => {
    return {
        type: LOGGED_IN,
        payload: username
    }
}

/**
 * Logout payload
 */
const loggedOut = () => {
    return {
        type: LOGGED_OUT
    }
}