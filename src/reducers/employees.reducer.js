import {
    ADD_NEW_EMPLOYE,
    ADD_NEW_EMPLOYE_ERROR,
    ADD_NEW_EMPLOYE_SUCCESS,
    GET_EMPLOYEES,
    GET_EMPLOYEES_ERROR,
    GET_EMPLOYEES_SUCCESS,
} from "../types/employees.types";

const initialState = {
    employees: [],
};

const employesReducers = (state = initialState, action) => {
    switch (action.type) {
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
