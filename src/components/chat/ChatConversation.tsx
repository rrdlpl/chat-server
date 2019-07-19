import * as React from 'react'
import { Grid } from '@material-ui/core';
import { useMappedState } from 'redux-react-hook';
export const ChatConversation = () => {


    const mapState = React.useCallback(
        (rootState) => ({
            conversation: rootState.chat.conversation
        }),
        []
    )
    // const { conversation } = useMappedState(mapState)

    return (
        <Grid container={true} >
            {/* {conversation &&
                conversation.map(())

            } */}
        </Grid>
    )
}