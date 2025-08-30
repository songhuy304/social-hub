import { AppDispatch } from "@/shared/reducers/store";
import { authenticationApi, postApi } from "@/shared/reducers/apis";
import { authenticationReducer } from "@/shared/reducers/states";

export const sharedReducers = {
  authentication: authenticationReducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
};

export const middlewares = [authenticationApi.middleware, postApi.middleware];

export const api = {
  util: {
    resetApiState: () => (dispatch: AppDispatch) => {
      dispatch(authenticationApi.util.resetApiState());
      dispatch(postApi.util.resetApiState());
    },
  },
};

export * from "./apis";
export * from "./states";
export * from "./store";
