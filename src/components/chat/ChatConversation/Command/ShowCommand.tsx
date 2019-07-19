


import * as React from 'react'
import { Typography } from '@material-ui/core';
import { ICommand } from '../../../../entities/responses/CommandResponse';

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