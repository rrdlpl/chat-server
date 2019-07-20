import React from 'react';
import { useMappedState } from 'redux-react-hook';

export const useChatState = () => {
    const mapState = React.useCallback(
        (rootState) => ({
            conversation: rootState.chat.conversation,
            messages: rootState.chat.messages,
            commands: rootState.chat.commands,
            connected: rootState.chat.connected,
            socket: rootState.chat.socket
        }),
        []
    )
    return useMappedState(mapState)

}