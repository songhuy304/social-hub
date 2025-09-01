import { createApi } from "@reduxjs/toolkit/query/react";
import { GATEWAY_URL } from "@/shared/constants";
import { fetchAuthBaseQuery } from "./common";
import { PageableRequest, PageableResponse } from "@/shared/types/pageable";
import { Comment } from "@/shared/types";

const QUERIES_NAME = "comments";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchAuthBaseQuery(`${GATEWAY_URL}`),
  tagTypes: [QUERIES_NAME],

  endpoints: (builder) => ({
    getCommentsByPost: builder.query<PageableResponse<Comment>, PageableRequest & { postId: number }>({
      query: ({ postId, ...params }) => ({
        url: `/comments/post/${postId}`,
        method: "GET",
        params,
      }),
      keepUnusedDataFor: 0,
      providesTags: [QUERIES_NAME],
      transformResponse: (response: unknown) =>
        new PageableResponse(response, QUERIES_NAME),
    }),
  }),
});

export const { useGetCommentsByPostQuery } = commentApi;
