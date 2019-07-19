import * as React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CommandIcon from '@material-ui/icons/BugReport';
import { blue } from '@material-ui/core/colors';


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