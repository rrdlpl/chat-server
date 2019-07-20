import * as React from 'react'
import { Grid } from '@material-ui/core';
import { SentMessage } from './SentMessage/SentMessage';
import { ReceivedMessage } from './ReceivedMessage/ReceivedMessage';
import { useChatState } from '../../../hooks/chat/useChatState';


/**
 * Component used to display the conversation between the
 * client and the server
 */
export const ChatConversation = () => {
    const { conversation } = useChatState()
    return (
        <Grid container={true} style={{ padding: '1em' }}>
            {conversation.map((c: any, index: number) =>
                <Grid key={index} item={true} xs={12} >
                    {c.type === 'received' && <ReceivedMessage {...c} />}
                    {c.type === 'sent' && <SentMessage {...c} />}
                </Grid>
            )}
        </Grid>
    )
}

