/**
 * @desc    Products actions
 */
import axios from 'axios';

// Types
import { PRODUCTS_LOADING, LOAD_FILTERED_PRODUCTS, LOAD_PRODUCTS } from './types';

/**
 * @desc    Loads all products
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const loadProducts = () => async (dispatch, getState) => {
    try {
        await setLoading();

        let products = await axios.get('http://localhost:3100/api/products', {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(products){
            dispatch({
                type: LOAD_PRODUCTS,
                payload: products.data
            })
        } else {
            throw new Error('There was a problem loading Products.')
        }

    } catch (e) {
        // TODO: setup dispatch for errors
        console.log(e);
    }

}

/**
 * @desc    Handles search filter
 * @type {(function(*, *): Promise<void>)|*}
 */
export const filterProducts = (value) => async (dispatch, getState) => {
    console.log(value);
    const { products: { products }} = getState();
    let filtered = [];

    try{
        await setLoading();
        if(value !== ""){
            if(products.length > 0){
                filtered = products.filter((product) => {
                    return product.name.toLowerCase().includes(value.toLowerCase()) ||
                        product.about.toLowerCase().includes(value.toLowerCase());
                });

                dispatch({
                    type: LOAD_FILTERED_PRODUCTS,
                    payload: filtered
                });
            }
        } else {
            dispatch({
                type: LOAD_FILTERED_PRODUCTS,
                payload: []
            })
        }
    } catch (e) {
        // TODO dispatch error messages
        console.log(e.message);
    }
}


/**
 * @desc    Sets loading flag
 */
export const setLoading = () => async (dispatch, getState) => {
    dispatch({
        type: PRODUCTS_LOADING
    })
}
