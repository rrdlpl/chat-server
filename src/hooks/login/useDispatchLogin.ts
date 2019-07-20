import { useDispatch } from 'redux-react-hook';
import React from 'react';
import { login } from '../../store/login/login-action';

/**
 * Dispatches the login action to redux
 */
export const useDispatchLogin = () => {
    const dispatch = useDispatch()
    const dispatchLogin: any =
        React.useCallback(
            (username: string, password: string) =>
                dispatch(login(username, password)),
            [dispatch],
        )
    return dispatchLogin
}