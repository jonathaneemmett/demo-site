/**
 " @desc    Authentication Reducer
 */

// Types
import { AUTH_LOADING, USER_LOGIN, USER_LOGOUT } from '../actions/types';

// Initial State
const initialState = {
    user: {},
    is_loading: false
};

// Handle dispatch types
export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload,
                is_loading: false
            }
        case USER_LOGOUT:
            return {
                ...state,
                user: {},
                is_loading: false
            }
        case AUTH_LOADING:
            return {
                ...state,
                is_loading: true
            }
    }

}
