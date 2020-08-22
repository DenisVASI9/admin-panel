import {applyMiddleware, compose, createStore} from "redux"
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from './reducers'
import {createBrowserHistory} from "history";

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    )
}
