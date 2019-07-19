


import * as React from 'react'
import { Typography } from '@material-ui/core';
import { ICommand, ILocation } from '../../../../entities/responses/CommandResponse';

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


interface IDateProps {
    date: string
}
const DateCommand = (props: IDateProps) => {
    const { date } = props
    return (
        <div>
            {date}
        </div>
    )
}

interface IRateProps {
    min: number,
    max: number
}

const RateCommand = (props: IRateProps) => {
    const { min, max } = props
    return (
        <div>
            {min}, {max}
        </div>
    )
}

interface IMapProps {
    location: ILocation
}
export const MapCommand = (props: IMapProps) => {
    const { location } = props
    return (
        < div >
            {location.lat}, {location.lng}
        </div >
    )
}

interface ICompleteProps {
    options: string[]
}
export const CompleteCommand = (props: ICompleteProps) => {
    const { options } = props
    return (
        <div>
            {JSON.stringify(options)}
        </div>
    )


}