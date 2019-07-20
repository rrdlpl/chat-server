import React from 'react';
import { useMappedState } from 'redux-react-hook';


/**
 * Wraps the redux store for the chat
 */
export const useLoginState = () => {
    const mapState = React.useCallback(
        (rootState) => ({
            username: rootState.login.username,
            loading: rootState.login.loading,
            loggedIn: rootState.login.loggedIn
        }),
        []
    )
    return useMappedState(mapState)
}