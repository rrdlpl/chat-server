import { Dispatch } from 'redux';

import io from 'socket.io-client';
import { IMessagePayload } from '../../entities/request/MessagePayload';
import { IMessageResponse } from '../../entities/responses/MessageResponse';
import { ICommandResponse } from '../../entities/responses/CommandResponse';
import { CONNECTED, COMMAND_RECEIVED, MESSAGE_RECEIVED, MESSAGE_SENT, COMMAND_SENT } from './constants';




export interface IChatAction {
    type: string
    payload?: IMessageResponse | ICommandResponse,
    socket: SocketIOClient.Socket
}

export const initSocket = () => {
    return (dispatch: Dispatch) => {
        const socket = io('https://demo-chat-server.on.ag/');
        dispatch({ type: 'connected' })
        socket.on('connect', () => {
            dispatch({ type: CONNECTED, socket })

            socket.on('message', (payload: any) => {
                dispatch({ type: MESSAGE_RECEIVED, payload })
            })

            socket.on('command', (payload: any) => {
                dispatch({ type: COMMAND_RECEIVED, payload })
            })
        })
    }
};

export const sendMessage = (socket: any, payload: IMessagePayload) => {
    return (dispatch: Dispatch) => {
        if (socket) {
            socket.emit('message', payload);
            dispatch({ type: MESSAGE_SENT, payload: payload })
        }
    }
}

export const sendCommand = (socket: SocketIOClient.Socket) => {
    return (dispatch: Dispatch) => {
        if (socket) {
            socket.emit('command', {})
            dispatch({ type: COMMAND_SENT })
        }
    }

}