import { configureStore } from "@reduxjs/toolkit";
import auth from './auth/auth.slice';
import reports from './reports/reports.slice';
import sales from './sales/sales.slice';
import products from './products/products.slice';

export const store = configureStore({
    reducer: {
        auth,
        reports,
        sales,
        products
    },
});  