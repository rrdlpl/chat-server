import * as React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useMappedState } from 'redux-react-hook';
import CommandIcon from '@material-ui/icons/BugReport';
import { blue, cyan } from '@material-ui/core/colors';
import { ICommand } from '../../../entities/responses/CommandResponse';


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


const useSendStyles = makeStyles(() => ({
    send: {
        float: 'right',
        marginBottom: '1em',
        borderRadius: '7.5px',
        boxShadow: '0 1px 0.5px rgba(0,0,0,.13)',
        maxWidth: '85%',
        backgroundColor: blue['100'].toString(),
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
                <Typography>
                    {payload === 'command_sent' && <div className={classes.command}>You sent a command  <CommandIcon /> </div>}
                    {payload.message}
                </Typography>
            </Grid>
        </Grid>
    )
}

const useReceiveStyles = makeStyles(() => ({
    recv: {
        float: 'left',
        marginBottom: '1em',
        borderRadius: '7.5px',
        boxShadow: '0 1px 0.5px rgba(0,0,0,.13)',
        maxWidth: '85%',
        backgroundColor: cyan['100'],
        padding: '0.5em 2em 0.5em 2em',
    },
}))

export const ReceivedMessage = (props: any) => {
    const { payload } = props
    const classes = useReceiveStyles()
    return (
        <Grid item={true} xs={12} className={classes.recv}>
            <Grid>
                {payload.command && <ShowCommand command={payload.command} />}
                <Typography>
                    {payload.message}
                </Typography>
            </Grid>
        </Grid>
    )
}


interface IShowCommandProps {
    command: ICommand
}
export const ShowCommand = (props: IShowCommandProps) => {
    const { command } = props
    return (
        <div>
            <Typography>
                Command received
            Type: {command.type}
                data: {JSON.stringify(command.data)}
            </Typography>
        </div>
    )
}