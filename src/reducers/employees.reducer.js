import {
    ADD_NEW_EMPLOYE,
    ADD_NEW_EMPLOYE_ERROR,
    ADD_NEW_EMPLOYE_SUCCESS,
    GET_EMPLOYEE,
    GET_EMPLOYEES,
    GET_EMPLOYEES_ERROR,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEE_ERROR,
    GET_EMPLOYEE_SUCCESS,
} from "../types/employees.types";

const initialState = {
    employees: [],
    employee: { name: "", position: "", observations: "", document: "" },
};

const employesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEE:
        case ADD_NEW_EMPLOYE:
        case GET_EMPLOYEES:
            return {
                ...state,
                loading: true,

            };
        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.payload,
            };
        case GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employee: action.payload,
            };
        case GET_EMPLOYEES_ERROR:
        case GET_EMPLOYEE_ERROR:
        case ADD_NEW_EMPLOYE_ERROR:
        case GET_EMPLOYEES_ERROR:
            return {
                ...state,
                loading: false,
            };
        case ADD_NEW_EMPLOYE_SUCCESS:
            return {
                ...state,
                loading: false,
                menssage: action.payload,
            };
        default:
            return state;
    }
};

export default employesReducers;
