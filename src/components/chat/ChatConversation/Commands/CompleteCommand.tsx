import * as React from 'react'
import { DialogTitle, Dialog, Button, DialogActions, Typography } from '@material-ui/core';
import { useChatState } from '../../../../hooks/useChatState';
import { useDispatchMessage } from '../../../../hooks/useDispatchMessage';
import { useDispatchComplete } from '../../../../hooks/useDispatchComplete';
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
