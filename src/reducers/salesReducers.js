import { formatDate } from "../helpers/FormatDate";
import {
    ADD_NEW_PRODUCT_DETAIL,
    REMOVE_ITEM_PRODUCT_DETAIL,
    GET_ALL_SALES_SUCCESS,
    GET_ALL_SALES,
    POST_NEW_SALE,
    POST_NEW_SALE_SUCCESS,
    POST_NEW_SALE_ERROR,
    FILTER_SALES_LIST,
    ADD_NEW_PRODUCT_ERROR,
    GET_SALE_BY_ID,
    GET_SALE_BY_ID_SUCCES,
    GET_SALE_BY_ID_ERROR,
    GET_ALL_SALES_ERROR,
    CANCEL_SALE_SUCCESS,
    CANCEL_SALE_ERROR,
    EDIT_PRODUCT_SALE_DETAIL,
    EDIT_PRODUCT_SALE_DETAIL_SUCCESS,
    EDIT_PRODUCT_SALE_DETAIL_ERROR,
    READ_DATASALE,
} from "../types/salesTypes";

const initialState = {
    sales: [],
    sale: {},
    dataSale: {
        date: formatDate(Date()),
        documentType: 1,
        document: "",
        payMethod: "",
    },
    producttoremove: {},
    detail: [],
    error: false,
    loading: true,
    filters: {
        category: "",
        dateFrom: "2022-05-01",
        dateTo: "2022-05-31",
        state: "1",
    },
    errorsNewProduct: {},
};

const salesReducers = (state = initialState, action) => {
    switch (action.type) {
        case POST_NEW_SALE:
        case GET_SALE_BY_ID:
        case GET_ALL_SALES:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_ALL_SALES_SUCCESS:
            return {
                ...state,
                sales: action.payload,
                loading: false,
            };

        case GET_ALL_SALES_ERROR:
            return {
                ...state,
                sales: [],
                loading: false,
                error: action.payload,
            };
        case GET_SALE_BY_ID_SUCCES:
            return {
                ...state,
                loading: false,
                sale: action.payload,
            };

        case GET_SALE_BY_ID_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case POST_NEW_SALE_SUCCESS:
            return {
                ...state,
                loading: false,
                detail: [],
                error: false,
                dataSale: initialState.dataSale
            };
        case POST_NEW_SALE_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case ADD_NEW_PRODUCT_DETAIL:
            return {
                ...state,

                detail: [...state.detail, action.payload],

                errorsNewProduct: false,
            };
        case ADD_NEW_PRODUCT_ERROR:
            return {
                ...state,
                errorsNewProduct: action.payload,
            };
        case REMOVE_ITEM_PRODUCT_DETAIL:
            return {
                ...state,

                detail: [...state.detail].filter(
                    (item) => item.id != action.payload
                ),
            };
        case FILTER_SALES_LIST:
            return {
                ...state,
                filters: action.payload,
            };

        case CANCEL_SALE_SUCCESS:
            return {
                ...state,
                sales: [...state.sales].filter(
                    (item) => item.id != action.payload
                ),
            };
        case CANCEL_SALE_ERROR:
            return {
                ...state,
            };
        case EDIT_PRODUCT_SALE_DETAIL:
            return {
                ...state,
                loading: true,
            };
        case EDIT_PRODUCT_SALE_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                detail: [
                    ...state.detail.filter(
                        (product) => product.id !== action.payload.id
                    ),
                    action.payload,
                ],
            };
        case EDIT_PRODUCT_SALE_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case READ_DATASALE:
            return {
                ...state,
                dataSale: action.payload,
            };
        
        default:
            return state;
    }
};

export default salesReducers;
