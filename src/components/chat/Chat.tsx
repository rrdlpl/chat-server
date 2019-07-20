import * as React from 'react'
import { ChatEnterText } from './ChatEnterText/ChatEnterText';
import { ChatConversation } from './ChatConversation/ChatConversation';
import { useChatState } from '../../hooks/chat/useChatState';
import { useEnterChat } from '../../hooks/chat/useEnterChat';
export interface IChatProps {
}

/**
 * Component to render the Chat
 */
export const Chat: React.FC<IChatProps> = () => {

    const enterChat = useEnterChat()

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
