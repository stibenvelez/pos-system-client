import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import {
    setAddNewBrand,
    setAddNewBrandError,
    setAddNewBrandSuccess,
    setGetAllBrands,
    setGetAllBrandsError,
    setGetAllBrandsSuccess,
} from "./brands.slice";

export const getAllBrandsAction = () => async (dispatch) => {
    console.log("getAllBrandsAction");
    dispatch(setGetAllBrands());
    try {
        tokenAuth();
        const response = await clienteAxios.get("/brands");
        dispatch(setGetAllBrandsSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(setGetAllBrandsError());
    }
};

export const addNewBrandAction = (brand) => async (dispatch) => {
    dispatch(setAddNewBrand());
    try {
        tokenAuth();
        const response = await clienteAxios.post("/brands", brand);
        dispatch(setAddNewBrandSuccess(response.data.msg));
        dispatch(getAllBrandsAction());
        Swal.fire(
            response.data.msg,
            "Se agregó correctamente la marca",
            "success"
        );
    } catch (error) {
        dispatch(setAddNewBrandError());
        Swal.fire("Error", "Hubo un error al agregar la marca", "error");
    }
};
