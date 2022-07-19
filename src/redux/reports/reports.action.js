import clienteAxios from "../../config/axios";
import {
    setGetFilters,
    setGetSalesReports,
    setGetSalesReportsError,
    setGetSalesReportsSuccess,
} from "./reports.slice";

export const getSalesReportAction = (filters) =>  async (dispatch) => {
        dispatch(setGetSalesReports());
        try {
            const result = await clienteAxios.get("/reports/sales", {
                params: filters,
            });
            console.log(result);
            dispatch(setGetSalesReportsSuccess(result.data));
        } catch (error) {
            console.log(error);
            dispatch(setGetSalesReportsError());
        }
    
};

export const getReportrFiltersAction = (filters) => async (dispatch) => {
    try {
        //dispatch(getSalesReportAction(filters));
        dispatch(setGetFilters());
    } catch (error) {
        console.log(error);
    }
        
    
};
