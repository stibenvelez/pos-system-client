import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sales: [],
    loading: true,
    filters: {},
};

export const reportsSlice = createSlice({
    name: "reports",
    initialState,
    reducers: {
        setGetSalesReports: (state, action) => {
            state.loading = true;
        },
        setGetSalesReportsSuccess: (state, action) => {
            state.loading = false;
            state.sales = action.payload;
            state.error = false;
        },
        setGetSalesReportsError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setGetFilters: (state, action) => {
            state.loading = false;
            state.filters = action.payload;
        }
    }
});

export const {
    setGetSalesReports,
    setGetSalesReportsSuccess,
    setGetSalesReportsError,
    setGetFilters
} = reportsSlice.actions;

export default reportsSlice.reducer;