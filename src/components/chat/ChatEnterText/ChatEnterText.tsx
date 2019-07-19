
import SendIcon from '@material-ui/icons/Send';
import CommandIcon from '@material-ui/icons/BugReport';
import * as React from 'react'
import { Toolbar, AppBar, makeStyles, TextField, Tooltip, Button } from '@material-ui/core'
import { useDispatch, useMappedState } from 'redux-react-hook';
import { sendMessage, sendCommand } from '../../../store/chat/actions';
import { IMessagePayload } from '../../../entities/request/MessagePayload';



const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  }
}));

export const ChatEnterText = () => {
  const classes = useStyles()
  const [text, setText] = React.useState('')
  const dispatch = useDispatch()

  const dispatchMessage: any =
    React.useCallback(
      (socket: SocketIOClient.Socket, message: IMessagePayload) =>
        dispatch(sendMessage(socket, message)),
      [dispatch],
    )
  const dispatchCommand: any =
    React.useCallback(
      (socket: SocketIOClient.Socket) =>
        dispatch(sendCommand(socket)),
      [dispatch],
    )
  const onSendMessageClick = () => {
    if (text && text !== '') {
      dispatchMessage(socket, { author: 'toset', message: text })
      setText('')
    }
  }

  const onCommandClick = () => {

    dispatchCommand(socket)

  }

  const mapState = React.useCallback(
    (rootState) => ({
      messages: rootState.chat.messages,
      commands: rootState.chat.commands,
      connected: rootState.chat.connected,
      socket: rootState.chat.socket
    }),
    []
  )

  const { socket } = useMappedState(mapState)


  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <TextField fullWidth={true} value={text} onChange={(e) => setText(e.currentTarget.value)}
          placeholder="Enter your message"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSendMessageClick()
            }
          }}>
        </TextField>

        <div className={classes.grow} />
        <Tooltip title={"After clicking here a message will be sent"}>
          <div>
            <Button onClick={() => onSendMessageClick()} disabled={(!text || text === '')}>
              <SendIcon />
            </Button>
          </div>
        </Tooltip>
        <Tooltip title={"After clicking here a command will be sent"}>
          <Button onClick={() => onCommandClick()}>
            <CommandIcon />
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}