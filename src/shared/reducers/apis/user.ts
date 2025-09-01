import { createApi } from "@reduxjs/toolkit/query/react";
import { GATEWAY_URL } from "@/shared/constants";
import { fetchAuthBaseQuery } from "./common";
import { TUser } from "@/shared/types";

const QUERIES_NAME = "users";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchAuthBaseQuery(`${GATEWAY_URL}`),
  tagTypes: [QUERIES_NAME],

  endpoints: (builder) => ({
    getUserById: builder.query<TUser, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: [QUERIES_NAME],
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
