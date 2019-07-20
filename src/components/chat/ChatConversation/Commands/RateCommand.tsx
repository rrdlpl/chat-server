import * as React from 'react'
import { DialogTitle, DialogContent, Button, Dialog, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import { useDispatch } from 'redux-react-hook';
import { sendMessage } from '../../../../store/chat/actions';
import { IMessagePayload } from '../../../../entities/request/MessagePayload';
import { useChatState } from '../../../../hooks/useChatState';


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
    const dispatch = useDispatch()

    const dispatchMessage: any =
        React.useCallback(
            (socket: SocketIOClient.Socket, message: IMessagePayload) =>
                dispatch(sendMessage(socket, message)),
            [dispatch],
        )

    const giveRating = (r: number) => {
        setRating(r)
        onClose()
        dispatchMessage(socket, { author: 'toset', message: 'I rate this app with ' + r + ' star(s)' })
    }


    const { socket } = useChatState()


    return (
        <>
            <div>
                <Typography>Please Rate from {min} to {max}</Typography>
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