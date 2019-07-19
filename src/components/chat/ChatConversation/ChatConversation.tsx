import * as React from 'react'
import { Grid } from '@material-ui/core';
import { useMappedState } from 'redux-react-hook';

import { SentMessage } from './SentMessage/SentMessage';
import { ReceivedMessage } from './ReceivedMessage/ReceivedMessage';


export const ChatConversation = () => {
    const mapState = React.useCallback(
        (rootState) => ({
            conversation: rootState.chat.conversation
        }),
        []
    )
    const { conversation } = useMappedState(mapState)

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

