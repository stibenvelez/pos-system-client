import {
    AUTH,
    AUTH_SUCCES,
    AUTH_ERROR,
    LOGIN,
    LOGIN_SUCCES,
    LOGIN_ERROR,
    SIGN_OUT,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR,
} from "../types/authTypes";
import clienteAxios from "../config/axios";

export const AuthAction = () => {
    return async (dispatch) => {
        dispatch({
            type: AUTH,
        });
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.log("no hay token");
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const result = await clienteAxios.get("/users/profile", config);
            dispatch({
                type: AUTH_SUCCES,
                payload: result.data,
            });
        } catch (error) {
            
            dispatch({
                type: AUTH_ERROR
            });
        }
    };
};

export const loginAction = (user) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN });
        try {
            const { data } = await clienteAxios.post("/users/login", user);
            localStorage.setItem("token", data.token);
            dispatch({ type: LOGIN_SUCCES, payload: data });
        } catch (error) {

            dispatch({ type: LOGIN_ERROR, payload: error.response.data.msg });
        }
    };
};

export const singOutAction = () => {
    return async (dispatch) => {
        dispatch({ type: SIGN_OUT });
        try {
            localStorage.removeItem('token')
            dispatch({ type: SIGN_OUT_SUCCESS});
        } catch (error) {
            dispatch({ type: SIGN_OUT_ERROR });
        }
    };
};
