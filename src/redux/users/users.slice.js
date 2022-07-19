import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    user: {},
    loading: false,
    error: false
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setGetAllUsers: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetAllUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = false;
        },
        setGetAllUsersError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setGetUserById: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetUserByIdSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = false;
        },
        setGetUserByIdError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    setGetAllUsers,
    setGetAllUsersSuccess,
    setGetAllUsersError,
    setGetUserById,
    setGetUserByIdSuccess,
    setGetUserByIdError
} = usersSlice.actions;

export default usersSlice.reducer;
