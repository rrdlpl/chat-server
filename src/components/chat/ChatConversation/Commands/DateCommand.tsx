
import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, Chip, Typography } from '@material-ui/core';
import moment from 'moment';
import { useChatState } from '../../../../hooks/useChatState';
import { useDispatchMessage } from '../../../../hooks/useDispatchMessage';

interface IDateProps {
    date: string
}


/**
 * Component to Render Command of type Date
 * @param props 
 */
export const DateCommand = (props: IDateProps) => {
    const { date } = props
    const [open, setOpen] = React.useState(true)
    const [workdays, setWorkdays] = React.useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'])

    React.useEffect(() => {
        const momentDate = moment(date).toDate()
        const start = moment(momentDate).isoWeekday() - 1
        const workdayAux = []
        for (let i = start; i < workdays.length; i++) {
            workdayAux.push(workdays[i])
        }
        for (let i = 0; i < start; i++) {
            workdayAux.push(workdays[i])
        }
        setWorkdays(workdayAux)
        // eslint-disable-next-line
    }, [date])

    const { socket } = useChatState()
    const dispatchMessage = useDispatchMessage()


    const onClose = () => {
        setOpen(false)
    }

    const onSelectDay = (workday: string) => {
        dispatchMessage(socket, { author: 'tosev', message: workday })
        onClose()
    }

    return (
        <div>
            <Typography>Date received: {moment(date).toDate().toString()}</Typography>
            <Dialog
                open={open}
                onClose={() => onClose()}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Please select a Date
                </DialogTitle>
                <DialogContent>
                    {workdays.map((workday: string, index: number) =>
                        <Chip key={index} label={workday} onClick={() => onSelectDay(workday)} color={'primary'} size={'small'} />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
