import clienteAxios from "../config/axios";
import { ADD_NEW_EMPLOYE, ADD_NEW_EMPLOYE_ERROR, ADD_NEW_EMPLOYE_SUCCESS, GET_EMPLOYEES, GET_EMPLOYEES_ERROR, GET_EMPLOYEES_SUCCESS } from "../types/employees.types";


export const getAllEmployeesAction = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_EMPLOYEES,
        });
        try {
            console.log('obteniendo empleados')
            const res = await clienteAxios("/employees");
            dispatch({
                type: GET_EMPLOYEES_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: GET_EMPLOYEES_ERROR,
            });
        }
    };
};

export const addNewEmployeAction = (employe) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_NEW_EMPLOYE,
        });
        try {
            const res = await clienteAxios.post("/employees", employe);
            dispatch({
                type: ADD_NEW_EMPLOYE_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: ADD_NEW_EMPLOYE_ERROR,
                payload: error.response.data.message,
            });
        }
    };
}
