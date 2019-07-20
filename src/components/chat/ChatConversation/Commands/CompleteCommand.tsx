import * as React from 'react'
import { DialogTitle, Dialog, Button, DialogActions, Typography } from '@material-ui/core';
import { useChatState } from '../../../../hooks/chat/useChatState';
import { useDispatchMessage } from '../../../../hooks/chat/useDispatchMessage';
import { useDispatchComplete } from '../../../../hooks/chat/useDispatchComplete';
import { useLoginState } from '../../../../hooks/login/useLoginState';
import { useDispatchLogout } from '../../../../hooks/login/useDispatchLogout';
interface ICompleteProps {
    options: string[];
}
/**
 * Component to Render Command of type Complete
 * @param props 
 */
export const CompleteCommand = (props: ICompleteProps) => {
    const { options } = props;
    const yes = options[0]
    const no = options[1]

    const [open, setOpen] = React.useState(true)
    const onClose = () => {
        setOpen(false)
    }

    const dispatchMessage = useDispatchMessage()
    const dispatchComplete = useDispatchComplete()
    const { username } = useLoginState()
    const dispatchLogout = useDispatchLogout()
    const onComplete = () => {
        onClose()
        dispatchMessage(socket, { author: username, message: yes })
        dispatchComplete(socket)
        dispatchLogout()
    }

    const onContinue = () => {
        onClose()
        dispatchMessage(socket, { author: username, message: no })
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
