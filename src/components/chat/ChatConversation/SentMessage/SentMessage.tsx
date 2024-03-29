import * as React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CommandIcon from '@material-ui/icons/BugReport';
import { blue } from '@material-ui/core/colors';
import { useLoginState } from '../../../../hooks/login/useLoginState';

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
    },
    author: {
        float: 'right',
        textAlign: 'right',
        display: 'contents'
    }
}))
/**
 * Component used to display the sent messages
 * they are displayed to the right
 * @param props 
 */
export const SentMessage = (props: any) => {
    const { payload } = props
    const classes = useSendStyles()
    const { username } = useLoginState()
    return (
        <Grid item={true} xs={12} className={classes.send}>
            <Grid>
                <div className={classes.author}>
                    <div >
                        <Typography variant="button" display="block" ><b>{username}</b></Typography>
                    </div>
                    <div>
                        <Typography>
                            {payload === 'command_sent' && <span className={classes.command}>You sent a command  <CommandIcon /> </span>}
                            {payload.message}
                        </Typography>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}