import { CONNECT_SOCKET, CONNECT_SOCKET_ERROR, CONNECT_SOCKET_SUCCESS } from "../types/socketTypes";

const initialState = {
    Sockets: {},
    error: null,
    loading: false,
};
const socketReducers = (state = initialState, action) => {
    switch (action.type) {
        case CONNECT_SOCKET:
            return {
                ...state,
                loading: true,
            };
        case CONNECT_SOCKET_SUCCESS:
            return {
                ...state,
                loading: false,
                Sockets: action.payload,
            };
        case CONNECT_SOCKET_ERROR:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};

export default socketReducers;