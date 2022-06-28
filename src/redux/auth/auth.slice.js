import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    user: {},
    loading: true,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.loading = true;
            state.auth = false;
        },
        setAuthSuccess: (state, action) => {
            state.loading = false;
            state.auth = true;
            state.user = action.payload;
        },
        setAuthError: (state, action) => {
            action.loading = false;
            action.auth = false;
        },
        setLogin: (state, action) => {
            state.loading = true;
            state.auth = false;
        },
        setLoginSuccess: (state, action) => {
            state.loading = false;
            state.auth = true;
            state.user = action.payload;
            state.error = false;
        },
        setLoginError: (state, action) => {
            state.loading = false;
            state.auth = false;
            state.user = {};
            state.error = action.payload;
        },
        signOut: (state, action) => {
            state.loading = true;
            state.auth = true;
        },
        signOutSuccess: (state, action) => {
            state.auth = false;
            state.user = {};
            state.loading = false;
            state.error = false;
        },
    },
});

export const {
    setAuth,
    setAuthSuccess,
    setAuthError,
    setLogin,
    setLoginSuccess,
    setLoginError,
    signOut,
    signOutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
