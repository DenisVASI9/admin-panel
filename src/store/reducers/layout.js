// Constants
import {LEFT_MENU_ACTION, RIGHT_MENU_ACTION} from "../../core/constants/store/layout";
// Constants

const initialState = {
    leftPanelIsOpened: true,
    rightPanelIsOpened: true
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case LEFT_MENU_ACTION:
            return {...state, leftPanelIsOpened: action.state}
        case RIGHT_MENU_ACTION:
            return {...state, rightPanelIsOpened: action.state}
        default:
            return state
    }
}