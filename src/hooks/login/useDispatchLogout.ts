import { useDispatch } from 'redux-react-hook';
import React from 'react';
import { logout } from '../../store/login/login-action';

/**
 * Dispatches the logout action to redux
 */
export const useDispatchLogout = () => {
    const dispatch = useDispatch()
    const dispatchLogout: any =
        React.useCallback(
            () =>
                dispatch(logout()),
            [dispatch],
        )
    return dispatchLogout
}