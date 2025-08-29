import { createSlice } from "@reduxjs/toolkit";

import { IRootState } from "@/shared/reducers/store";

export interface AuthenticationState {
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
};

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setLoginState: (state) => {
      state.isAuthenticated = true;
      // Storage.local.set('isAuthenticated', true);
    },

    setLogoutState: (state) => {
      state.isAuthenticated = false;
      // Storage.local.remove('isAuthenticated');
    },
  },
});

export const { setLoginState, setLogoutState } = AuthenticationSlice.actions;
export const authenticationReducer = AuthenticationSlice.reducer;

export const selectAuthenticatedDetail = (state: IRootState) =>
  state.authentication.isAuthenticated;
