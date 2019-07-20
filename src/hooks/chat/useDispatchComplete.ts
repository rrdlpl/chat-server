import { complete } from '../../store/chat/chat-actions';
import React from 'react';
import { useDispatch } from 'react-redux';

/**
 * Dispatches complete action to redux
 */
export const useDispatchComplete = () => {
    const dispatch = useDispatch()
    const dispatchComplete: any =
        React.useCallback(
            (socket: SocketIOClient.Socket) =>
                dispatch(complete(socket)),
            [dispatch],
        )

    return dispatchComplete

}