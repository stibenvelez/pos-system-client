import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: {},
    error: null,
    loading: false,
    filters: {
        category: "",
    },
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setGetProduct: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetProductSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload;
            state.error = false;
        },
        setGetProductError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setGetProducts: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = false;
        },
        setGetProductsError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setFilterProducts: (state, action) => {
            state.filters = action.payload;
        },
        setEditProduct: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setEditProductSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        setEditProductError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setAddNewProduct: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setAddNewProductSuccess: (state, action) => {
            state.loading = false;
            state.msg = action.payload;
        },
        setAddNewProductError: (state, action) => {
            state.loading = false;
            state.msg = action.payload;
        },
        setDisableProduct: (state, action) => {},
        setDisableProductSuccess: (state, action) => {
            state.loading = false;
            state.products = state.products.filter(
                (product) => product.idProduct !== action.payload
            );
        },
        setDisableProductError: (state, action) => {
            state.loading = false;
            state.error = true;
        }
    },
});

export const {
    setGetProduct,
    setGetProductSuccess,
    setGetProductError,
    setGetProducts,
    setGetProductsSuccess,
    setGetProductsError,
    setFilterProducts,
    setEditProduct,
    setEditProductSuccess,
    setEditProductError,
    setAddNewProduct,
    setAddNewProductSuccess,
    setAddNewProductError,
    setDisableProduct,
    setDisableProductSuccess,
    setDisableProductError,
} = productsSlice.actions;

export default productsSlice.reducer;
