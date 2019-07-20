import * as React from 'react'
import { ChatEnterText } from './ChatEnterText/ChatEnterText';
import { ChatConversation } from './ChatConversation/ChatConversation';
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
    return (
        <div>
            <ChatConversation />
            <ChatEnterText />
        </div>
    )
}
