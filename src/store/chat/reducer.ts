import { CONNECTED, COMMAND_RECEIVED, MESSAGE_RECEIVED, MESSAGE_SENT, COMMAND_SENT } from './constants';
import { IMessageResponse } from '../../entities/responses/MessageResponse';

import { ICommandResponse } from '../../entities/responses/CommandResponse';
import { IChatAction } from './actions';
import { IMessagePayload } from '../../entities/request/MessagePayload';


const initialState: IChatReducer = {
    messages: [],
    commands: [],
    conversation: [],
    lastCommand: undefined,
    connected: false,
    socket: undefined
}

interface IChatReducer {
    messages: IMessageResponse[]
    commands: ICommandResponse[]
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
                commands: [...state.commands, command],
                lastCommand: command,
                conversation: [...state.conversation, { type: 'received', payload: command }]
            }
        }
        case MESSAGE_RECEIVED: {
            const message = action.payload as IMessageResponse
            return {
                ...state,
                messages: [...state.messages, message],
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
        default: {
            return state
        }
    }
}