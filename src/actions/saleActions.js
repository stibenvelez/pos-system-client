import clienteAxios from "../config/axios";
import { toast } from "react-toastify";
import {
    ADD_NEW_PRODUCT_DETAIL,
    ADD_NEW_PRODUCT_ERROR,
    REMOVE_ITEM_PRODUCT_DETAIL,
    POST_NEW_SALE,
    POST_NEW_SALE_SUCCESS,
    POST_NEW_SALE_ERROR,
    GET_ALL_SALES,
    GET_ALL_SALES_SUCCESS,
    GET_ALL_SALES_ERROR,
    FILTER_SALES_LIST,
    GET_SALE_BY_ID,
    GET_SALE_BY_ID_SUCCES,
    GET_SALE_BY_ID_ERROR,
    CANCEL_SALE,
    CANCEL_SALE_SUCCESS,
    CANCEL_SALE_ERROR,
    EDIT_PRODUCT_SALE_DETAIL,
    EDIT_PRODUCT_SALE_DETAIL_SUCCESS,
    EDIT_PRODUCT_SALE_DETAIL_ERROR,
    READ_DATASALE,
} from "../types/salesTypes";
import Swal from "sweetalert2";

// add new product to sail detail
export const addProductToSaleDetailAction = (product) => {
    return (dispatch) => {
        dispatch(addProductToSaleDetail(product));
    };
};

const addProductToSaleDetail = (product) => ({
    type: ADD_NEW_PRODUCT_DETAIL,
    payload: product,
});

export const validateErrorsNewProductAction = (errors) => {
    return (dispatch) => {
        dispatch({
            type: ADD_NEW_PRODUCT_ERROR,
            payload: errors,
        });
    };
};

// remove item from sale detail
export const removeItemFromSaleDetailAction = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ITEM_PRODUCT_DETAIL,
            payload: id,
        });
        toast.success("Producto eliminado!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    };
};

// GET ALL SALES
export const getAllSalesAction = (filters) => {
    return async (dispatch) => {
        dispatch({
            type: GET_ALL_SALES,
        });
        try {
            const sales = await clienteAxios.get(`/sales`, { params: filters });
            dispatch({
                type: GET_ALL_SALES_SUCCESS,
                payload: sales.data,
            });
        } catch (error) {
            dispatch({
                type: GET_ALL_SALES_ERROR,
                payload: error,
            });
        }
    };
};

//get sale by id
export const getSaleByIdAction = (id) => {
    return async (dispatch) => {
        dispatch(getSaleByid());
        try {
            const sale = await clienteAxios.get(`/sales/${id}`);
            dispatch(getSaleByidSucces(sale.data));
        } catch (error) {
            dispatch(getSaleByidError(error));
        }
    };
};

const getSaleByid = () => ({
    type: GET_SALE_BY_ID,
});
const getSaleByidSucces = (sale) => ({
    type: GET_SALE_BY_ID_SUCCES,
    payload: sale,
});

const getSaleByidError = (error) => ({
    type: GET_SALE_BY_ID_ERROR,
    payload: error,
});

// Register one new sale
export const RegisterOneNewSaleAction = (sale) => {
    return async (dispatch) => {
        dispatch({
            type: POST_NEW_SALE,
        });

        try {
            await clienteAxios.post("/sales", sale);
            dispatch({
                type: POST_NEW_SALE_SUCCESS,
            });
            Swal.fire({
                title: `Ingreso registrado`,
                text: "Se registró la venta con exito",
                icon: "success",
            });
        } catch (error) {
            console.log("error", error.response.data);
            dispatch({
                type: POST_NEW_SALE_ERROR,
            });

            Swal.fire({
                title: error.response.data.msg,
                text: "",
                icon: "error",
            });
        }
    };
};

// filter Sales list
export const FilterSalesListAction = (filter) => {
    return async (dispatch) => {
        dispatch(filterSales(filter));
    };
};

const filterSales = (filters) => ({
    type: FILTER_SALES_LIST,
    payload: filters,
});

// CANCEL SALE
export const cancelSaleByIdAction = (sale) => {
    return async (dispatch) => {
        dispatch({ type: CANCEL_SALE });
        try {
            await clienteAxios.put("sales/cancel-sale", sale);
            Swal.fire(
                "ingreso anulado!",
                "Se anulo el ingreso con exito",
                "success"
            );
            dispatch({ type: CANCEL_SALE_SUCCESS, payload: sale.id });
        } catch (error) {
            console.log(error);
            dispatch({ type: CANCEL_SALE_ERROR });
        }
    };
};

export const editProductSaleDetailAction = (product) => {
    return (dispatch) => {
        dispatch({ type: EDIT_PRODUCT_SALE_DETAIL });
        try {
            dispatch({
                type: EDIT_PRODUCT_SALE_DETAIL_SUCCESS,
                payload: product,
            });
        } catch (error) {
            console.log("----->", error);
            dispatch({ type: EDIT_PRODUCT_SALE_DETAIL_ERROR });
        }
    };
};

export const readDatasaleAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: READ_DATASALE,
            payload: data,
        });
    };
};
