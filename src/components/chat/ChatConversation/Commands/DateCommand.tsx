
import * as React from 'react'

interface IDateProps {
    date: string
}
export const DateCommand = (props: IDateProps) => {
    const { date } = props
    return (
        <div>
            {date}
        </div>
    )
}
