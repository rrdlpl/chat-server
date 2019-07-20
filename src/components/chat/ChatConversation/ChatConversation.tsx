import * as React from 'react'
import { Grid } from '@material-ui/core';
import { SentMessage } from './SentMessage/SentMessage';
import { ReceivedMessage } from './ReceivedMessage/ReceivedMessage';
import { useChatState } from '../../../hooks/chat/useChatState';

/**
 * Hook to scroll always to the bottom as Whatsapp style
 */
const useScroll = () => {
    const executeScroll = () => {
        const conversationContainer = document.getElementById('conversation-container')
        if (conversationContainer && conversationContainer !== null) {
            window.scrollTo(0, conversationContainer.clientHeight)
        }
    }
    return executeScroll
}
/**
 * Component used to display the conversation between the
 * client and the server
 */
export const ChatConversation = () => {
    const { conversation } = useChatState()
    const executeScroll = useScroll()
    React.useEffect(() => {
        executeScroll()
    },
        // eslint-disable-next-line 
        [conversation])
    return (
        <Grid id='conversation-container' container={true} style={{ paddingRight: '1em', paddingLeft: '1em', paddingBottom: 60 }}>
            {conversation.map((c: any, index: number) =>
                <Grid key={index} item={true} xs={12} >
                    {c.type === 'received' && <ReceivedMessage {...c} />}
                    {c.type === 'sent' && <SentMessage {...c} />}
                </Grid>
            )}
        </Grid>
    )
}

