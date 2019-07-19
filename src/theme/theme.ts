import { createMuiTheme, Theme } from '@material-ui/core/styles'

export const mainTheme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#27c1df'
        },
        secondary: {
            main: '#5E9FAE'
        }
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        // useNextVariants: true,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        fontSize: 12
    },
    props: {
        MuiTableCell: {
            style: {
                fontSize: '0.75em'
            }
        }
    }
})
