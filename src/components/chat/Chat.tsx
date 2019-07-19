import * as React from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook';
import { initSocket } from '../../store/chat/actions';
import { ChatEnterText } from './ChatEnterText/ChatEnterText';
import { ChatConversation } from './ChatConversation/ChatConversation';
export interface IChatProps {
}

export const Chat: React.FC<IChatProps> = () => {

    const dispatch = useDispatch()

    const enterChat =
        React.useCallback(
            () =>
                dispatch(initSocket()),
            [dispatch],
        )

    React.useEffect(() => {
        enterChat()
    }, [enterChat])

    const mapState = React.useCallback(
        (rootState) => ({
            messages: rootState.chat.messages,
            commands: rootState.chat.commands,
            connected: rootState.chat.connected,
            socket: rootState.chat.socket
        }),
        []
    )

    const { connected } = useMappedState(mapState)

    return (
        <div>
            Is chat connected? {connected ? "true" : "false"}

            <ChatConversation />
            <ChatEnterText />
        </div>
    )
}
