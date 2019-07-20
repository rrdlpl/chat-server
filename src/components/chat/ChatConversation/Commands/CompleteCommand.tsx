import * as React from 'react'
import { useDispatch } from 'redux-react-hook';
import { DialogTitle, Dialog, Button, DialogActions, Typography } from '@material-ui/core';
import { sendMessage, complete } from '../../../../store/chat/actions';
import { IMessagePayload } from '../../../../entities/request/MessagePayload';
import { useChatState } from '../../../../hooks/useChatState';
interface ICompleteProps {
    options: string[];
}
export const CompleteCommand = (props: ICompleteProps) => {
    const { options } = props;
    const yes = options[0]
    const no = options[1]

    const [open, setOpen] = React.useState(true)
    const onClose = () => {
        setOpen(false)
    }

    const dispatch = useDispatch()

    const dispatchMessage: any =
        React.useCallback(
            (socket: SocketIOClient.Socket, message: IMessagePayload) =>
                dispatch(sendMessage(socket, message)),
            [dispatch],
        )


    const dispatchComplete: any =
        React.useCallback(
            (socket: SocketIOClient.Socket) =>
                dispatch(complete(socket)),
            [dispatch],
        )

    const onComplete = () => {
        onClose()
        dispatchMessage(socket, { author: 'toset', message: yes })
        dispatchComplete(socket)
    }

    const onContinue = () => {
        onClose()
        dispatchMessage(socket, { author: 'toset', message: no })
    }

    const { socket } = useChatState()

    return (
        <div>
            <Typography>Complete ? {JSON.stringify(options)}</Typography>
            <Dialog
                open={open}
                onClose={() => onClose()}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Do you want to complete {yes} or {no} ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => onComplete()} color='primary'>
                        {yes}
                    </Button>
                    <Button onClick={() => onContinue()} color='primary'>
                        {no}
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
};
