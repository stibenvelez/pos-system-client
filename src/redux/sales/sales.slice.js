import { createSlice } from "@reduxjs/toolkit";
import { formatDate } from "../../helpers/FormatDate";

const initialState = {
    sales: [],
    sale: {},
    dataSale: {
        date: formatDate(Date()),
        documentType: 1,
        document: "",
        payMethod: "",
        registeredBy: "",
    },
    producttoremove: {},
    detail: [],
    error: false,
    loading: true,
    filters: {
        category: "",
        dateFrom: "2022-05-01",
        dateTo: "2022-06-30",
        state: "1",
    },
    errorsNewProduct: {},
};

export const salesSlice = createSlice({
    name: "sales",
    initialState,
    reducers: {
        setGetAllSales: (state, action) => {
            state.loading = true;
            state.error
        },
        setGetAllSalesSuccess: (state, action) => {
            state.loading = false;
            state.sales = action.payload;
            state.error = false;
        },
        setGetAllSalesError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.sales = [];
        },
        setGetSaleById: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetSaleByIdSuccess: (state, action) => {
            state.loading = false;
            state.sale = action.payload;
            state.error = false;
        },
        setGetSaleByIdError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setPostNewSale: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setPostNewSaleSuccess: (state, action) => {
            state.loading = false;
            state.sale = action.payload;
            state.error = false;
            state.detail = []
            state.dataSale = initialState.dataSale
        },
        setPostNewSaleError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setAddNewProductDetail: (state, action) => {
            state.loading = true;
            state.error = false;
            state.detail = [...state.detail, action.payload]
            state.errorsNewProduct = false
        },
        setValidateAddNewProductError: (state, action) => {
            state.loading = false;
            state.errorsNewProduct = action.payload;
        },
        setRemoveItemProductDetail: (state, action) => {
            state.loading = true;
            state.error = false;
            state.producttoremove = action.payload
            state.detail = [...state.detail].filter(
                (item) => item.id != action.payload
            )
        },
        setFilterSalesList: (state, action) => {
            state.loading = true;
            state.error = false;
            state.filters = action.payload
        },
        setCancelSaleSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.sales = [...state.sales].filter(
                (item) => item.id != action.payload
            )
        },
        setCancelSaleError: (state, action) => {
            state.loading = false;
        },
        setEditProductSaleDetail: (state, action) => {
            state.loading = true
        },
        setEditProductSaleDetailSuccess: (state, action) => {
            state.loading = false
            state.detail = [
                    ...state.detail.filter(
                        (product) => product.id !== action.payload.id
                    ),
                    action.payload,
                ]
        },
        setEditProductSaleDetailError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        setReadDataSale: (state, action) => {
            state.loading = true
            state.error = false
            state.dataSale = action.payload
        }
    }
});

export const {
    setGetAllSales,
    setGetAllSalesSuccess,
    setGetAllSalesError,
    setGetSaleById,
    setGetSaleByIdSuccess,
    setGetSaleByIdError,
    setPostNewSale,
    setPostNewSaleSuccess,
    setPostNewSaleError,
    setAddNewProductDetail,
    setRemoveItemProductDetail,
    setFilterSalesList,
    setCancelSaleSuccess,
    setCancelSaleError,
    setEditProductSaleDetail,
    setEditProductSaleDetailSuccess,
    setEditProductSaleDetailError,
    setReadDataSale,
    setValidateAddNewProductError,
} = salesSlice.actions;

export default salesSlice.reducer;






