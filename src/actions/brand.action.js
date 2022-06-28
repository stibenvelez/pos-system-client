import clienteAxios from "../config/axios";
import {
    ADD_NEW_BRAND,
    ADD_NEW_BRAND_ERROR,
    ADD_NEW_BRAND_SUCCESS,
    GET_ALL_BRANDS,
    GET_ALL_BRANDS_ERROR,
    GET_ALL_BRANDS_SUCCESS,
} from "../types/brandTypes";
import Swal from "sweetalert2";

export const getAllBrandsAction = () => async (dispatch) => {
    
    dispatch({
        type: GET_ALL_BRANDS,
    });
    try {
        const response = await clienteAxios.get("/brands");
        dispatch({
            type: GET_ALL_BRANDS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_BRANDS_ERROR,
            payload: error.response.data.message,
        });
    }
};

export const addNewBrandAction = (brand) => async (dispatch) => {
    dispatch({
        type: ADD_NEW_BRAND,
    });
    try {
        const response = await clienteAxios.post("/brands", brand);
        dispatch({
            type: ADD_NEW_BRAND_SUCCESS,
            payload: response.data.msg,
        });
        getAllBrandsAction();
        Swal.fire(
            response.data.msg,
            "Se agregó correctamente la marca",
            "success"
        );
    } catch (error) {
        dispatch({
            type: ADD_NEW_BRAND_ERROR,
            payload: error.response.data.message,
        });
        Swal.fire("Error", "Hubo un error al agregar la marca", "error");
    }
};
