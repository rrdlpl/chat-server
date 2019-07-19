


import * as React from 'react'
import { Typography } from '@material-ui/core';
import { ICommand, ILocation } from '../../../../entities/responses/CommandResponse';
import { CompleteCommand } from './CompleteCommand';
import { MapCommand } from './MapCommand';
import { DateCommand } from './DateCommand';
import { RateCommand } from './RateCommand';

interface IShowCommandProps {
    command: ICommand
}
export const ShowCommand = (props: IShowCommandProps) => {
    const { command } = props
    switch (command.type) {
        case 'date':
            const date = command.data as string
            return (<DateCommand date={date} />)
        case 'rate':
            const data = command.data as number[]
            return (<RateCommand min={data[0]} max={data[1]} />)
        case 'map': {
            const location = command.data as ILocation
            return (<MapCommand location={location} />)
        }
        case 'complete': {
            const options = command.data as string[]
            return (<CompleteCommand options={options} />)
        }
    }
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






