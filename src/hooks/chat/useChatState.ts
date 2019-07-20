import React from 'react';
import { useMappedState } from 'redux-react-hook';


/**
 * Wraps the redux store for the chat
 */
export const useChatState = () => {
    const mapState = React.useCallback(
        (rootState) => ({
            conversation: rootState.chat.conversation,
            connected: rootState.chat.connected,
            socket: rootState.chat.socket
        }),
        []
    )
    return useMappedState(mapState)
}