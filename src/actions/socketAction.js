import { CONNECT_SOCKET, CONNECT_SOCKET_ERROR, CONNECT_SOCKET_SUCCESS } from "../types/socketTypes";
import clienteAxios from "../config/axios";
import io from "socket.io-client";

export const connectSocketAction = () => {
    return async (dispatch) => {
        dispatch({
            type: CONNECT_SOCKET,
        });
        try {
            let socket = io(import.meta.env.VITE_BACKEND_URL);
            dispatch({
                type: CONNECT_SOCKET_SUCCESS,
                payload: socket,
            });
        } catch (error) {
            dispatch({
                type: CONNECT_SOCKET_ERROR,
            });
        }
    };
}
