import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {reducer as layout} from "./layout";

const createRootReducer = (history) => combineReducers({
    layout,
    router: connectRouter(history)
})
export default createRootReducer