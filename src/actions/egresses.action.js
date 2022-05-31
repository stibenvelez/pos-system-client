import clienteAxios from "../config/axios";
import {
    ADD_EGRESS,
    ADD_EGRESS_ERROR,
    ADD_EGRESS_SUCCESS,
    GET_EGRESSES,
    GET_EGRESSES_CATEGORIES,
    GET_EGRESSES_CATEGORIES_ERROR,
    GET_EGRESSES_CATEGORIES_SUCCESS,
    GET_EGRESSES_ERROR,
    GET_EGRESSES_SUBCATEGORIES,
    GET_EGRESSES_SUBCATEGORIES_ERROR,
    GET_EGRESSES_SUBCATEGORIES_SUCCESS,
    GET_EGRESSES_SUCCESS,
} from "../types/egresses.types";
import Swal from "sweetalert2";

export const getAllEgressesAction = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_EGRESSES,
        });
        try {
            const response = await clienteAxios.get("/egresses");
            dispatch({
                type: GET_EGRESSES_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: GET_EGRESSES_ERROR,
                payload: error.response.data.message,
            });
        }
    };
};

export const getAllEgressesCategoriesAction = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_EGRESSES_CATEGORIES,
        });
        try {
            const res = await clienteAxios("/egresses/categories");
            dispatch({
                type: GET_EGRESSES_CATEGORIES_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_EGRESSES_CATEGORIES_ERROR,
            });
        }
    };
};
export const getAllEgressesSubCategoriesAction = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_EGRESSES_SUBCATEGORIES,
        });
        try {
            const res = await clienteAxios("/egresses/subcategories");
            dispatch({
                type: GET_EGRESSES_SUBCATEGORIES_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_EGRESSES_SUBCATEGORIES_ERROR,
            });
        }
    };
};

export const addNewEgressAction = (egress) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_EGRESS,
        });
        try {
            const res = await clienteAxios.post("/egresses", egress);
            
            Swal.fire({
                title: `Egreso registrado`,
                text: "Se registró el egreso con exito",
                icon: "success",
            });
            dispatch({
                type: ADD_EGRESS_SUCCESS,
                payload: res.data.msg,
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: ADD_EGRESS_ERROR,
            });
        }
    };
};

