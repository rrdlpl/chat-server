import { CONNECTED, COMMAND_RECEIVED, MESSAGE_RECEIVED, MESSAGE_SENT, COMMAND_SENT, DISCONNECTED } from './chat-constants';
import { IMessageResponse } from '../../entities/responses/MessageResponse';

import { ICommandResponse } from '../../entities/responses/CommandResponse';
import { IChatAction } from './chat-actions';
import { IMessagePayload } from '../../entities/request/MessagePayload';


const initialState: IChatReducer = {
    conversation: [],
    connected: false,
    socket: undefined
}

interface IChatReducer {
    conversation: Array<any>,
    lastCommand?: ICommandResponse
    connected: boolean,
    socket?: SocketIOClient.Socket
}

export const chatReducer = (state: IChatReducer = initialState, action: IChatAction | any) => {
    switch (action.type) {
        case CONNECTED: {
            return {
                ...state,
                connected: true,
                socket: action.socket
            }
        }
        case COMMAND_RECEIVED: {
            const command = action.payload as ICommandResponse
            return {
                ...state,
                conversation: [...state.conversation, { type: 'received', payload: command }]
            }
        }
        case MESSAGE_RECEIVED: {
            const message = action.payload as IMessageResponse
            return {
                ...state,
                conversation: [...state.conversation, { type: 'received', payload: message }]
            }
        }
        case MESSAGE_SENT: {
            const message = action.payload as IMessagePayload
            return {
                ...state,
                conversation: [...state.conversation, { type: 'sent', payload: message }]
            }
        }
        case COMMAND_SENT: {
            return {
                ...state,
                conversation: [...state.conversation, { type: 'sent', payload: COMMAND_SENT }]
            }
        }
        case DISCONNECTED: {
            return {
                ...state,
                socket: undefined,
                connected: false,
            }
        }
        default: {
            return state
        }
    }
}