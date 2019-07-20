import { sendMessage } from '../store/chat/actions';
import { useDispatch } from 'redux-react-hook';
import React from 'react';
import { IMessagePayload } from '../entities/request/MessagePayload';

export const useDispatchMessage = () => {
    const dispatch = useDispatch()
    const dispatchMessage: any =
        React.useCallback(
            (socket: SocketIOClient.Socket, message: IMessagePayload) =>
                dispatch(sendMessage(socket, message)),
            [dispatch],
        )
    return dispatchMessage
}