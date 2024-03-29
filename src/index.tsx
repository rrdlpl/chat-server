import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { StoreContext } from 'redux-react-hook'
import { Provider } from 'react-redux';
import { mainTheme } from './theme/theme';
import { ThemeProvider } from '@material-ui/styles';


ReactDOM.render(
    <StoreContext.Provider value={store}>
        <Provider store={store}>
            <ThemeProvider theme={mainTheme}>

                <App />
            </ThemeProvider>
        </Provider>
    </StoreContext.Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
