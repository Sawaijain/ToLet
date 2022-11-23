/* eslint-disable prettier/prettier */
export const DARK_THEME = 'DARK_THEME';
export const LOGIN_STATUS = 'LOGIN_STATUS';


export const ChangeTheme = theme => dispatch => {
    dispatch({
        type: DARK_THEME,
        payload: theme,
    });
};

export const LoginStatus = status => dispatch => {
    dispatch({
        type: LOGIN_STATUS,
        payload: status,
    });
};
