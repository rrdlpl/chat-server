import { CONNECTED, COMMAND_RECEIVED, MESSAGE_RECEIVED } from './constants';
import { IMessageResponse } from '../../entities/responses/MessageResponse';

import { ICommandResponse } from '../../entities/responses/CommandResponse';
import { IChatAction } from './actions';


const initialState: IChatReducer = {
    messages: [],
    commands: [],
    lastCommand: undefined,
    connected: false,
    socket: undefined
}

interface IChatReducer {
    messages: IMessageResponse[]
    commands: ICommandResponse[]
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
                lastCommand: command
            }
        }
        case MESSAGE_RECEIVED: {
            const message = action.payload as IMessageResponse
            return {
                ...state,
                messages: [...state.messages, message]
            }
        }
        default: {
            return state
        }
    }
}