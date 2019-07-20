import { Typography, Grid, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import * as React from 'react'
import logo from './logo.png'
import brand from './brand.svg'
import ChatBubble from '@material-ui/icons/ChatBubble'

const useLoginStyles = makeStyles((theme: any) => ({
    container: {
        width: '100vw',
        minHeight: '100vh'
    },
    signInButtonContainer: {
        // width: 350,
        // height: '100%'
    },
    leftIcon: {
        marginRight: theme.spacing(2),
        width: '24px',
        height: '24px'
    },
    chatServer: {
        display: 'inline-block',
    },
    // textContainer: {

    //     padding: 0
    // }
}));

export const Login = () => {
    const classes = useLoginStyles()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const onLogin = () => {
        console.log('Log in')
    }
    return (
        <Grid
            className={classes.container}
            container={true}
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item={true} xs={12} md={12} sm={12}>
                <Grid
                    container={true}
                    spacing={10}

                    alignItems={'center'}
                    direction={'column'}
                    justify={'center'}
                    alignContent='center'
                >

                    <Grid item={true} xs={12} md={12} sm={12}>
                        <div>
                            <img src={brand} alt={'ottonova brand logo'} />
                            <div>
                                <Typography variant='body1' className={classes.chatServer}>Chat server</Typography>
                                <ChatBubble />
                            </div>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12} md={12} sm={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <TextField placeholder={'Username'} value={username} onChange={(e) => setUsername(e.target.value)}
                            autoComplete={'off'} />
                    </Grid>
                    <Grid id='password' item={true} xs={12} md={12} sm={12} style={{ paddingBottom: 0 }}>
                        <TextField placeholder={'Password'} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}
                            autoComplete={'off'} />
                    </Grid>
                    <Grid item={true} xs={12} md={12} sm={12} className={classes.signInButtonContainer}>
                        <Button variant='outlined' color='primary' onClick={() => onLogin()}>
                            <img src={logo} alt='logo' className={classes.leftIcon} />
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}