import * as React from 'react'
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { useMappedState } from 'redux-react-hook';
import CommandIcon from '@material-ui/icons/BugReport';


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


const useSendStyles = makeStyles((theme: Theme) => ({
    send: {
        float: 'right',
        marginBottom: '1em',
        borderRadius: '7.5px',
        boxShadow: '0 1px 0.5px rgba(0,0,0,.13)',
        maxWidth: '85%',
        backgroundColor: theme.palette.primary.main,
        padding: '0.5em 2em 0.5em 2em',
    },
    command: {
        display: 'inline-flex',

    }
}))
export const SentMessage = (props: any) => {
    const { payload } = props
    const classes = useSendStyles()
    return (
        <Grid item={true} xs={12} className={classes.send}>
            <Grid>
                {payload === 'command_sent' && <div className={classes.command}>A command was sent  <CommandIcon /> </div>}
                {payload.message}
            </Grid>
        </Grid>
    )
}

const useReceiveStyles = makeStyles(theme => ({
    recv: {
        float: 'left',
        marginBottom: '1em',
        borderRadius: '7.5px',
        boxShadow: '0 1px 0.5px rgba(0,0,0,.13)',
        maxWidth: '85%',
        backgroundColor: theme.palette.secondary.main,
        padding: '0.5em 2em 0.5em 2em',
    },
}))

export const ReceivedMessage = (props: any) => {
    const { payload } = props
    const classes = useReceiveStyles()
    return (
        <Grid item={true} xs={12} className={classes.recv}>
            <Grid>

                {payload.message}
            </Grid>
        </Grid>
    )
}