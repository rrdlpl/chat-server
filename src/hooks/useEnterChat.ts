import { useDispatch } from 'redux-react-hook';
import { initSocket } from '../store/chat/chat-actions';
import React from 'react';

/**
 * Dispatch the action to connect to the Chat server
 */
export const useEnterChat = () => {
    const dispatch = useDispatch()

    const enterChat =
        React.useCallback(
            () =>
                dispatch(initSocket()),
            [dispatch],
        )
    return enterChat
}