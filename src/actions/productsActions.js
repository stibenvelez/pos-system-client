import clienteAxios from "../config/axios";
import {
    ADD_NEW_PRODUCT,
    ADD_NEW_PRODUCT_ERROR,
    ADD_NEW_PRODUCT_SUCCESS,
    DISABLE_PRODUCT,
    DISABLE_PRODUCT_ERROR,
    DISABLE_PRODUCT_SUCCESS,
    EDIT_PRODUCT,
    EDIT_PRODUCT_ERROR,
    EDIT_PRODUCT_SUCCESS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
    FILTER_PRODUCTS,
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS,
} from "../types/productsTypes";

// get products
export const getAllProductsActions = (filters) => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_PRODUCTS,
        });

        try {
            const res = await clienteAxios.get("/products", {
                params: filters,
            });
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: FETCH_PRODUCTS_ERROR,
            });
        }
    };
};

// GET PRODUCT BY ID
export const getProductByIdAction = (id) => {
    return async (dispatch) => {
        dispatch({
            type: GET_PRODUCT,
        });

        try {
            const res = await clienteAxios.get(`/products/${id}`);
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: res.data[0],
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_PRODUCT_ERROR,
            });
        }
    };
};

// EDIT PRODUCT BY ID
export const editProductByIdAction = (productData) => {
    return async (dispatch) => {
        dispatch(editProductById());
        try {
            const data = new FormData();
            productData.idProduct &&
                data.append("idProduct", productData.idProduct);
            data.append("product", productData.product);
            data.append("brand", productData.brand);
            data.append("idProductCategory", productData.idProductCategory);
            data.append(
                "commissionPercentage",
                productData.commissionPercentage
            );
            data.append("unitCost", productData.unitCost);
            data.append("unitPrice", productData.unitPrice);
            data.append("observations", productData.observations);
            data.append("image", productData.image);

            const idProduct = data.get("idProduct");
            const res = await clienteAxios.put(`/products/${idProduct}`, data);
            dispatch(editProductByIdSuccess(res.data[0]));
            //dispatch(getProductByIdAction(product.idProduct));
        } catch (error) {
            console.log(error);
            dispatch(editProductByIdError());
        }
    };
};

const editProductById = () => ({
    type: EDIT_PRODUCT,
});
const editProductByIdSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product,
});
const editProductByIdError = () => ({
    type: EDIT_PRODUCT_ERROR,
});

//ADD NEW PRODUCT
export const addNewProductAction = (productData) => {
    return async (dispatch) => {
        console.log(productData);
        const data = new FormData();
        data.append("product", productData.product);
        data.append("brand", productData.brand);
        data.append("idProductCategory", productData.idProductCategory);
        data.append("commissionPercentage", productData.commissionPercentage);
        data.append("unitCost", productData.unitCost);
        data.append("unitPrice", productData.unitPrice);
        data.append("observations", productData.observations);
        data.append("image", productData.image);

        dispatch({
            type: ADD_NEW_PRODUCT,
        });
        try {
            await clienteAxios.post(`/products`, data);
            dispatch({
                type: ADD_NEW_PRODUCT_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: ADD_NEW_PRODUCT_ERROR,
                payload: error,
            });
        }
    };
};

// FILTERS PRODUCT
export const filterProductsAction = (filters) => {
    return async (dispatch) => {
        dispatch({
            type: FILTER_PRODUCTS,
            payload: filters,
        });
    };
};

// DISABLE PRODUCT

export const disableProductAction = (id) => {
    return async (dispatch) => {
        dispatch({ type: DISABLE_PRODUCT });
        try {
            const result = await clienteAxios.put(`/products/disable/${id}`);
            console.log(result.data);
            dispatch({ type: DISABLE_PRODUCT_SUCCESS, payload: id });
            //dispatch(getAllProductsActions())
        } catch (error) {
            dispatch({ type: DISABLE_PRODUCT_ERROR });
        }
    };
};
