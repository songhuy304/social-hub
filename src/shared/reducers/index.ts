import { authenticationReducer } from "@/shared/reducers/states/authentication";
import { AppDispatch } from "@/shared/reducers/store";
import { authenticationApi } from "./apis/authentication";

export const sharedReducers = {
  authentication: authenticationReducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
};

export const middlewares = [authenticationApi.middleware];

export const api = {
  util: {
    resetApiState: () => (dispatch: AppDispatch) => {
      dispatch(authenticationApi.util.resetApiState());
    },
  },
};

export * from "./apis";
export * from "./states";
export * from "./store";
