import {
    ADD_NEW_BRAND,
    ADD_NEW_BRAND_ERROR,
    ADD_NEW_BRAND_SUCCESS,
    GET_ALL_BRANDS,
    GET_ALL_BRANDS_ERROR,
    GET_ALL_BRANDS_SUCCESS,
} from "../types/brandTypes";

const initialState = {
    brands: [],
    loading: false,
    error: false,
};

const brandReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BRANDS:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_BRANDS_SUCCESS:
            return {
                ...state,
                brands: action.payload,
                loading: false,
            };
        case GET_ALL_BRANDS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case ADD_NEW_BRAND:
            return {
                ...state,
                loading: true,
            };
        case ADD_NEW_BRAND_SUCCESS:
            return {
                ...state,
                message: action.payload,
                loading: false,
            };
        case ADD_NEW_BRAND_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        default:
            return state;
    }
};

export default brandReducers;