import * as React from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook';
import { Button } from '@material-ui/core'
import { initSocket, sendCommand } from '../../store/actions';

export interface IChatProps {

}

export const Chat: React.FC<IChatProps> = (props: IChatProps) => {

    const dispatch = useDispatch()

    const enterChat =
        React.useCallback(
            () =>
                dispatch(initSocket()),
            [],
        )

    React.useEffect(() => {
        enterChat()

    }, [])

    const dispatchCommand: any =
        React.useCallback(
            (socket: SocketIOClient.Socket) =>
                dispatch(sendCommand(socket)),
            [],
        )

    const mapState = React.useCallback(
        (rootState) => ({
            messages: rootState.chat.messages,
            commands: rootState.chat.commands,
            connected: rootState.chat.connected,
            socket: rootState.chat.socket
        }),
        []
    )

    const onCommandClick = () => {
        if (socket) {
            dispatchCommand(socket)
        }
    }

    const { messages, commands, connected, socket } = useMappedState(mapState)
    console.log(' mesages', messages)
    console.log('commands', commands)
    console.log('Connected', connected)
    return (
        <div>
            Is chat connected? {connected ? "true" : "false"}
            <Button onClick={() => onCommandClick()}>Command</Button>
        </div>
    )
}