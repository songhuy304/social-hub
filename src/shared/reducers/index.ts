import { AppDispatch } from "@/shared/reducers/store";
import { authenticationApi, postApi } from "@/shared/reducers/apis";
import { authenticationReducer } from "@/shared/reducers/states";
import { userApi } from "@/shared/reducers/apis/user";
import { commentApi } from "@/shared/reducers/apis/comment";

export const sharedReducers = {
  authentication: authenticationReducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
};

export const middlewares = [
  authenticationApi.middleware,
  postApi.middleware,
  userApi.middleware,
  commentApi.middleware,
];

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
