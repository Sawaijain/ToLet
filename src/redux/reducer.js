/* eslint-disable prettier/prettier */
import { DARK_THEME } from "./action";
import { LOGIN_STATUS } from "./action";

const initialValue = {
    theme: false,
}

const initialStatus = {
    status: false,
}

function themeReducer(state = initialValue, action) {
    switch (action.type) {
        case DARK_THEME:
            return { ...state, theme: action.payload }
        default:
            return state;
    }
}

function loginStatusReducer(state = initialStatus, action) {
    switch (action.type) {
        case LOGIN_STATUS:
            return { ...state, status: action.payload };
        default:
            return state;
    }
}

export { themeReducer, loginStatusReducer };