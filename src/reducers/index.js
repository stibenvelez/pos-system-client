import { combineReducers } from "redux";
import productsReducers from "./productsReducer";
import salesReducers from "./salesReducers";
import salesDetailsReducers from "./salesDetailsReducers";
import authReducer from "./authReducer";
import reportsReducer from "./reportsReducer";
import productsCategoriesReducers from "./productCategory.reducer";
import employesReducers from "./employees.reducer";
import egressesReducers from "./egresses.reducers";
import socketReducers from "./socketReducer";


export default combineReducers({
    products: productsReducers,
    productsCategories: productsCategoriesReducers,
    sales: salesReducers,
    salesDetails: salesDetailsReducers,
    auth: authReducer,
    reports: reportsReducer,
    employees: employesReducers,
    egresses: egressesReducers,
    socket: socketReducers,
});
