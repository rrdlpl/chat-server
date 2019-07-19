

import * as React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

import { ShowCommand } from '../Commands/ShowCommand';



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
