import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import {
    setGetAllUsers,
    setGetAllUsersError,
    setGetAllUsersSuccess,
    setGetUserById,
    setGetUserByIdError,
    setGetUserByIdSuccess,
} from "./users.slice";

export const getAllUsersAction = () => async (dispatch) => {
    dispatch(setGetAllUsers());
    try {
        tokenAuth();
        const { data } = await clienteAxios.get("/users");
        dispatch(setGetAllUsersSuccess(data));
    } catch (error) {
        dispatch(setGetAllUsersError());
    }
};

export const getUserByIdAction = (id) => async (dispatch) => {
    dispatch(setGetUserById());
    try {
        tokenAuth();
        const { data } = await clienteAxios.get(`/users/${id}`);
        dispatch(setGetUserByIdSuccess(data));
    } catch (error) {
        dispatch(setGetUserByIdError());
    }
};
