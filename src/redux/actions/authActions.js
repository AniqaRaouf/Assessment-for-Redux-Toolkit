// Action types
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Action creators
export const signup = (user) => ({
    type: SIGNUP,
    payload: user,
});


// authActions.js

export const login = ({ username, password }) => (dispatch, getState) => {
    const { users } = getState().auth;

    // Find user by username
    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
        // If username and password match, dispatch login success action
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: user,
        });
    } else {
        // Dispatch login failure action
        dispatch({
            type: 'LOGIN_FAILURE',
            payload: 'Invalid username or password',
        });
    }
};



export const logout = () => ({
    type: LOGOUT,
});
