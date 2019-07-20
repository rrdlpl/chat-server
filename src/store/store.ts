
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { History } from 'history'
import { chatReducer } from './chat/chat-reducer';


const rootReducer = combineReducers({
    chat: chatReducer
})

// The store orchestrates all the moving parts in Redux.
// Redux store is fundamental: the state of the whole application lives inside the store
export const history: History = createBrowserHistory()
export const store = createStore(
    connectRouter(history)(rootReducer),
    compose(applyMiddleware(routerMiddleware(history), thunk))
)

// The state of the application lives as a single, timmutable object within the store.
export default store
