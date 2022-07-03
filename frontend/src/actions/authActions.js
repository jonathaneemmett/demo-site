/**
 * @desc    Authentication actions
 */
import axios from 'axios';
import { toast } from "react-toastify";

// Types
import {AUTH_LOADING, USER_LOGIN, USER_LOGOUT} from './types';

/**
 * @desc    User Login
 * @return {(function(*, *): Promise<*>)|*}
 */
export const login = (formBody) => async (dispatch, getState) => {

    try{
        let response = await axios.post('http://localhost:3100/api/users/login', JSON.stringify(formBody), {headers: {"Content-Type": "application/json"}})
        if(response.status === 200){
            dispatch({
                type: USER_LOGIN,
                payload: response.data
            });

            toast.success("User login successful!");
        }

    } catch (e) {
        toast.error(e.response.data.message);
        console.log(e.response.data.message);
    }
};

/**
 * @desc    Register User
 * @return {(function(*, *): Promise<*>)|*}
 */
export const register = (formBody) => async (dispatch, getState) => {

    try{
        let response = await axios.post('http://localhost:3100/api/users/register', JSON.stringify(formBody), {headers: {"Content-Type": "application/json"}})

        if(response.status === 201){
            // user was created so login the user in.
            dispatch({
                type: USER_LOGIN,
                payload: response.data
            });

            toast.success("User login successful!");
        }
    } catch (e) {
        toast.error(e.response.data.message);
        console.log(e.response.data.message);
    }
};

/**
 * @desc    User Logout
 * @return {(function(*, *): void)|*}
 */
export const logOut = () => (dispatch, getState) => {
    dispatch({
        type: USER_LOGOUT,
    });
};


/**
 * @desc    Sets loading flag
 */
export const setLoading = () => async (dispatch, getState) => {
    dispatch({
        type: AUTH_LOADING
    })
}
