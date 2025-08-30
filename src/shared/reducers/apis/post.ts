import { createApi } from "@reduxjs/toolkit/query/react";

import { GATEWAY_URL } from "@/shared/constants";
import { fetchAuthBaseQuery } from "./common";
import { PageableRequest, PageableResponse } from "@/shared/types/pageable";
import { Post } from "@/shared/types";

const QUERIES_NAME = "Posts";

export const postApi = createApi({
  reducerPath: "postApi",

  baseQuery: fetchAuthBaseQuery(`${GATEWAY_URL}`),
  tagTypes: ["Post"],

  endpoints: (builder) => ({
    getPosts: builder.query<PageableResponse<Post>, PageableRequest>({
      query: (params) => ({
        url: `/posts`,
        method: "GET",
        params,
      }),
      keepUnusedDataFor: 0,
      providesTags: ["Post"],
      transformResponse: (response: unknown) =>
        new PageableResponse(response, QUERIES_NAME),
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
