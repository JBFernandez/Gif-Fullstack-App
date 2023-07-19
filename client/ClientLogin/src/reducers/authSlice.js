import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "",
    user: {},
    errorMessage: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
            state.user = "";
            state.errorMessage = undefined;
        },

        onLogin: ( state, { payload } ) => {
            state.status = 'Authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },

        onLogout: ( state, { payload } ) => {
            state.status = "not-authenticated";
            state.user = {};
            state.errorMessage = payload;
        }

    }
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;