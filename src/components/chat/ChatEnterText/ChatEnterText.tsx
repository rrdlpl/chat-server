
import SendIcon from '@material-ui/icons/Send';
import CommandIcon from '@material-ui/icons/BugReport';
import * as React from 'react'
import { Toolbar, AppBar, makeStyles, TextField, Tooltip, Button } from '@material-ui/core'
import { useChatState } from '../../../hooks/chat/useChatState';
import { useDispatchMessage } from '../../../hooks/chat/useDispatchMessage';
import { useDispatchCommand } from '../../../hooks/chat/useDispatchCommand';



const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  }
}));

/**
 * Component used to Enter the user messages and send commands
 */
export const ChatEnterText = () => {
  const classes = useStyles()
  const [text, setText] = React.useState('')
  const dispatchMessage = useDispatchMessage()
  const dispatchCommand = useDispatchCommand()

  const onSendMessageClick = () => {
    if (text && text !== '') {
      dispatchMessage(socket, { author: 'toset', message: text })
      setText('')
    }
  }

  const onCommandClick = () => {
    dispatchCommand(socket)
  }
  const { socket } = useChatState()
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