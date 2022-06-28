import clienteAxios from "../../config/axios";
import {
    setAddNewProduct,
    setAddNewProductError,
    setAddNewProductSuccess,
    setDisableProduct,
    setDisableProductError,
    setDisableProductSuccess,
    setEditProduct,
    setEditProductError,
    setEditProductSuccess,
    setFilterProducts,
    setGetProduct,
    setGetProductError,
    setGetProducts,
    setGetProductsError,
    setGetProductsSuccess,
    setGetProductSuccess,
} from "./products.slice";

// get products
export const getAllProductsActions = (filters) => {
    return async (dispatch) => {
        dispatch(setGetProducts());

        try {
            const res = await clienteAxios.get("/products", {
                params: filters,
            });
            dispatch(setGetProductsSuccess(res.data));
        } catch (error) {
            console.log(error);
            dispatch(setGetProductsError());
        }
    };
};

// GET PRODUCT BY ID
export const getProductByIdAction = (id) => {
    return async (dispatch) => {
        dispatch(setGetProduct());

        try {
            const res = await clienteAxios.get(`/products/${id}`);
            dispatch(setGetProductSuccess(res.data[0]));
        } catch (error) {
            console.log(error);
            dispatch(setGetProductError());
        }
    };
};

// EDIT PRODUCT BY ID
export const editProductByIdAction = (productData) => {
    return async (dispatch) => {
        dispatch(setEditProduct());
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
            dispatch(setEditProductSuccess(res.data[0]));
            //dispatch(getProductByIdAction(product.idProduct));
        } catch (error) {
            console.log(error);
            dispatch(setEditProductError());
        }
    };
};

//ADD NEW PRODUCT
export const addNewProductAction = (productData) => {
    return async (dispatch) => {
        const data = new FormData();
        data.append("product", productData.product);
        data.append("brand", productData.brand);
        data.append("idProductCategory", productData.idProductCategory);
        data.append("commissionPercentage", productData.commissionPercentage);
        data.append("unitCost", productData.unitCost);
        data.append("unitPrice", productData.unitPrice);
        data.append("observations", productData.observations);
        data.append("image", productData.image);

        dispatch(setAddNewProduct());
        try {
            await clienteAxios.post(`/products`, data);
            dispatch(setAddNewProductSuccess());
        } catch (error) {
            dispatch(setAddNewProductError(error));
        }
    };
};

// FILTERS PRODUCT
export const filterProductsAction = (filters) => {
    return async (dispatch) => {
        dispatch(setFilterProducts(filters));
    };
};


// DISABLE PRODUCT
export const disableProductAction = (id) => {
    return async (dispatch) => {
        dispatch(setDisableProduct());
        try {
            const result = await clienteAxios.put(`/products/disable/${id}`);
            console.log(result.data);
            dispatch(setDisableProductSuccess(id));
            //dispatch(getAllProductsActions())
        } catch (error) {
            dispatch(setDisableProductError());
        }
    };
};