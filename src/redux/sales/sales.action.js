import Swal from "sweetalert2";
import { toast } from "react-toastify";
import {
    setAddNewProductDetail,
    setCancelSaleError,
    setCancelSaleSuccess,
    setEditProductSaleDetail,
    setEditProductSaleDetailError,
    setEditProductSaleDetailSuccess,
    setFilterSalesList,
    setGetAllSales,
    setGetAllSalesError,
    setGetAllSalesSuccess,
    setGetSaleById,
    setGetSaleByIdError,
    setGetSaleByIdSuccess,
    setGetSalesDetails,
    setGetSalesDetailsBySaleId,
    setGetSalesDetailsBySaleIdError,
    setGetSalesDetailsBySaleIdSuccess,
    setGetSalesDetailsError,
    setGetSalesDetailsSuccess,
    setPostNewSale,
    setPostNewSaleError,
    setPostNewSaleSuccess,
    setReadDataSale,
    setRemoveItemProductDetail,
    setValidateAddNewProductError,
} from "./sales.slice";
import clienteAxios from "../../config/axios";

// add new product to sail detail
export const addProductToSaleDetailAction = (product) => {
    return (dispatch) => {
        dispatch(setAddNewProductDetail(product));
    };
};

export const validateErrorsNewProductAction = (errors) => {
    return (dispatch) => {
        dispatch(setValidateAddNewProductError(errors));
    };
};

// remove item from sale detail
export const removeItemFromSaleDetailAction = (id) => {
    return (dispatch) => {
        dispatch(setRemoveItemProductDetail(id));
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
        dispatch(setGetAllSales());
        try {
            const sales = await clienteAxios.get(`/sales`, { params: filters });
            dispatch(setGetAllSalesSuccess(sales.data));
        } catch (error) {
            dispatch(setGetAllSalesError(error));
        }
    };
};

//get sale by id
export const getSaleByIdAction = (id) => {
    return async (dispatch) => {
        dispatch(setGetSaleById());
        try {
            const sale = await clienteAxios.get(`/sales/${id}`);
            dispatch(setGetSaleByIdSuccess(sale.data));
        } catch (error) {
            dispatch(setGetSaleByIdError(error));
        }
    };
};

// Register one new sale
export const registerOneNewSaleAction = (sale) => {
    return async (dispatch) => {
        dispatch(setPostNewSale());

        try {
            await clienteAxios.post("/sales", sale);
            dispatch(setPostNewSaleSuccess());
            Swal.fire({
                title: `Ingreso registrado`,
                text: "Se registró la venta con exito",
                icon: "success",
            });
        } catch (error) {
            console.log("error", error.response.data);
            dispatch(setPostNewSaleError(error.response.data));

            Swal.fire({
                title: error.response.data.msg,
                text: "",
                icon: "error",
            });
        }
    };
};

// filter Sales list
export const FilterSalesListAction = (filter) => async (dispatch) => {
    console.log("filter", filter);
    dispatch(setFilterSalesList(filter));
};

// CANCEL SALE
export const cancelSaleByIdAction = (sale) => {
    return async (dispatch) => {
        try {
            await clienteAxios.put("sales/cancel-sale", sale);
            Swal.fire(
                "ingreso anulado!",
                "Se anulo el ingreso con exito",
                "success"
            );
            dispatch(setCancelSaleSuccess(sale.id));
        } catch (error) {
            console.log(error);
            dispatch(setCancelSaleError());
        }
    };
};

export const editProductSaleDetailAction = (product) => {
    return (dispatch) => {
        dispatch(setEditProductSaleDetail());
        try {
            dispatch(setEditProductSaleDetailSuccess(product));
        } catch (error) {
            dispatch(setEditProductSaleDetailError());
        }
    };
};

export const readDatasaleAction = (data) => {
    return (dispatch) => {
        dispatch(setReadDataSale(data));
    };
};

export const getAllSalesDetailsAction = () => async (dispatch) => {
    dispatch(setGetSalesDetails());
    try {
        const sales = await clienteAxios.get(`/sales-details`);
        dispatch(setGetSalesDetailsSuccess(sales.data));
    } catch (error) {
        dispatch(setGetSalesDetailsError(error));
    }
};

export const getSaleDetailByIdSaleAction = (idSale) => async (dispatch) => {
    dispatch(setGetSalesDetailsBySaleId());
    try {
        const salesDetails = await clienteAxios.get(
            `/sales-details/search-by-idsale/${idSale}`
        );
        dispatch(setGetSalesDetailsBySaleIdSuccess(salesDetails.data));
    } catch (error) {
        dispatch(setGetSalesDetailsBySaleIdError(error));
    }
};
