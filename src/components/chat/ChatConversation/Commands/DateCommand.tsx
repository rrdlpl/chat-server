
import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, Chip } from '@material-ui/core';
import { sendMessage } from '../../../../store/chat/actions';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { IMessagePayload } from '../../../../entities/request/MessagePayload';

interface IDateProps {
    date: string
}
export const DateCommand = (props: IDateProps) => {
    const { date } = props
    const [open, setOpen] = React.useState(true)
    const workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const mapState = React.useCallback(
        (rootState) => ({
            socket: rootState.chat.socket
        }),
        []
    )
    const { socket } = useMappedState(mapState)

    const dispatch = useDispatch()

    const dispatchMessage: any =
        React.useCallback(
            (socket: SocketIOClient.Socket, message: IMessagePayload) =>
                dispatch(sendMessage(socket, message)),
            [dispatch],
        )

    const onClose = () => {
        setOpen(false)
    }

    const onSelectDay = (workday: string) => {
        dispatchMessage(socket, { author: 'tosev', message: workday })
        onClose()
    }

    return (
        <div>
            Date received {date}
            <Dialog
                open={open}
                onClose={() => onClose()}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Please select a Date
                </DialogTitle>
                <DialogContent>
                    {workdays.map((workday: string, index: number) =>
                        <Chip key={index} label={workday} onClick={() => onSelectDay(workday)} />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
