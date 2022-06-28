import clienteAxios from "../../config/axios";
import {
    setGetFilters,
    setGetSalesReports,
    setGetSalesReportsError,
    setGetSalesReportsSuccess,
} from "./reports.slice";

export const getSalesReportAction = (filters) => {
    return async (dispatch) => {
        dispatch(setGetSalesReports());
        try {
            const result = await clienteAxios.get("/reports/sales", {
                params: filters,
            });

            dispatch(setGetSalesReportsSuccess(result.data));
        } catch (error) {
            dispatch(setGetSalesReportsError());
        }
    };
};

export const getReportrFiltersAction = (filters) => {
    return async (dispatch) => {
        //dispatch(getSalesReportAction(filters));
        dispatch(setGetFilters());
    };
};
