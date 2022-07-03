/**
 " @desc    Products Reducer
 */

// Types
import { PRODUCTS_LOADING, LOAD_PRODUCTS, LOAD_FILTERED_PRODUCTS } from '../actions/types';

// Initial State
const initialState = {
    products: [],
    filteredProducts: [],
    is_loading: false
};


// Handle dispatch types
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case LOAD_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload
            }
        case PRODUCTS_LOADING:
            return {
                ...state,
                is_loading: true
            }
        default:
            return state;
    }
}
