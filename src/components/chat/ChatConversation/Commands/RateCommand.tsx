import * as React from 'react'


interface IRateProps {
    min: number,
    max: number
}

export const RateCommand = (props: IRateProps) => {
    const { min, max } = props
    return (
        <div>
            {min}, {max}
        </div>
    )
}