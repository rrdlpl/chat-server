import { sendCommand } from '../store/chat/actions';
import { useDispatch } from 'redux-react-hook';
import React from 'react';

export const useDispatchCommand = () => {
    const dispatch = useDispatch()
    const dispatchCommand: any =
        React.useCallback(
            (socket: SocketIOClient.Socket) =>
                dispatch(sendCommand(socket)),
            [dispatch],
        )
    return dispatchCommand
}