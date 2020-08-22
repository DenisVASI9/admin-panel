import {LEFT_MENU_ACTION, RIGHT_MENU_ACTION} from "../../core/constants/store/layout";

export function triggerLeftMenu(isOpened) {
    return {
        type: LEFT_MENU_ACTION,
        state: isOpened
    }
}

export function triggerRightMenu(isOpened) {
    return {
        type: RIGHT_MENU_ACTION,
        state: isOpened
    }
}