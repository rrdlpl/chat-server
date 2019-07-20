import { Dispatch } from 'redux';

import io from 'socket.io-client';
import { IMessagePayload } from '../../entities/request/MessagePayload';
import { IMessageResponse } from '../../entities/responses/MessageResponse';
import { ICommandResponse } from '../../entities/responses/CommandResponse';
import { CONNECTED, COMMAND_RECEIVED, MESSAGE_RECEIVED, MESSAGE_SENT, COMMAND_SENT, DISCONNECTED } from './chat-constants';

export interface IChatAction {
    type: string
    payload?: IMessageResponse | ICommandResponse,
    socket: SocketIOClient.Socket
}

/**
 * Connects to the chat server
 * and register to message, command, and disconnect Events.
 */
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

            socket.on('disconnect', (payload: any) => {
                console.log('Socket disconnected')
                dispatch({ type: DISCONNECTED })
            })
        })
    }
};

/**
 * Sends a message to the chat server
 * @param socket  the socket client
 * @param payload message payload
 */
export const sendMessage = (socket: any, payload: IMessagePayload) => {
    return (dispatch: Dispatch) => {
        if (socket) {
            socket.emit('message', payload);
            dispatch({ type: MESSAGE_SENT, payload: payload })
        } else {
            dispatch(sendDisconnectedMessage())
        }
    }
}

/**
 * Sends a command to the chat server
 * @param socket the socket client
 */
export const sendCommand = (socket: SocketIOClient.Socket) => {
    return (dispatch: Dispatch) => {
        if (socket) {
            socket.emit('command', {})
            dispatch({ type: COMMAND_SENT })
        } else {
            dispatch(sendDisconnectedMessage())
        }
    }
}

/**
 * Disconnects the socket client from the chat server
 * @param socket the socket client
 */
export const complete = (socket: SocketIOClient.Socket) => {
    return (dispatch: Dispatch) => {
        if (socket) {
            socket.disconnect()
            dispatch(sendDisconnectedMessage())
        }
    }
}

/**
 * Sends a fake message when the client is disconnected
 */
const sendDisconnectedMessage = () => {
    return { type: MESSAGE_RECEIVED, payload: { message: 'Chat disconnected. Please refresh the browser to connect again.' } }
}