import * as React from 'react'
import { useDispatch } from 'redux-react-hook';
import { initSocket } from '../../store/chat/actions';
import { ChatEnterText } from './ChatEnterText/ChatEnterText';
import { ChatConversation } from './ChatConversation/ChatConversation';
import { useChatState } from '../../hooks/useChatState';
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



    const { connected } = useChatState()

    return (
        <div>
            Is chat connected? {connected ? "true" : "false"}

            <ChatConversation />
            <ChatEnterText />
        </div>
    )
}
