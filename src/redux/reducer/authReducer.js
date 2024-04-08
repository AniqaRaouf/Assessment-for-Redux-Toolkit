// authReducer.js

const initialState = {
    isLoggedIn: false,
    users: [], // Array to store registered users
    currentUser: null, // Current logged-in user
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return {
                ...state,
                users: [...state.users, action.payload], // Add new user to the list
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null,
            };
        case 'SET_TEXT':
            // Handle setText action
            return {
                ...state,
                text: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
