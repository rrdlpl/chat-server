import { Dispatch } from 'redux';

import io from 'socket.io-client';
import { IMessagePayload } from '../entities/request/MessagePayload';
import { IMessageResponse } from '../entities/responses/MessageResponse';
import { ICommandResponse } from '../entities/responses/CommandResponse';



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
            dispatch({ type: 'connected', socket })

            socket.on('message', (payload: any) => {
                dispatch({ type: 'message', payload })
            })

            socket.on('command', (payload: any) => {
                dispatch({ type: 'command', payload })
            })
        })
    }
};

export const sendMessage = (socket: any, payload: IMessagePayload) => {
    return (dispatch: Dispatch) => {
        if (socket) {
            socket.emit('message', payload);
            dispatch({ type: 'message_sent', payload: payload })
        }
    }
}

export const sendCommand = (socket: SocketIOClient.Socket) => {
    return (dispatch: Dispatch) => {
        if (socket) {
            socket.emit('command', {})
            dispatch({ type: 'command_sent' })
        }
    }

}