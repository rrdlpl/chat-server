import * as React from 'react'
import { DialogTitle, DialogContent, Button, Dialog } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorderOutlined';


interface IRateProps {
    min: number,
    max: number
}

export const RateCommand = (props: IRateProps) => {
    const { min, max } = props
    const [open, setOpen] = React.useState(true)
    const [, setRating] = React.useState(min)
    const onClose = () => {
        setOpen(false)
    }

    const stars = []

    for (let i = min; i <= max; i++) {
        stars.push(
            <Button key={i} onClick={() => giveRating(i)}>
                <StarIcon />
            </Button>
        )
    }

    const giveRating = (r: number) => {
        setRating(r)
        onClose()
        console.log('You rated the app with', r)
    }

    return (
        <>
            <div>
                Rate from {min} to {max}
            </div>
            <Dialog
                open={open}
                onClose={() => onClose()}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Please rate your experience from {min} to {max}
                </DialogTitle>
                <DialogContent>

                    {
                        stars
                    }
                </DialogContent>

            </Dialog>
        </>

    )
}