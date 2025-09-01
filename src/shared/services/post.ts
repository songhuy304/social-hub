import { PageableRequest, PageableResponse } from "@/shared/types/pageable";
import { Post } from "@/shared/types";
import { api } from "./api";

const POST_ENDPOINTS = {
  GET_ALL: "/posts",
  GET_BY_ID: "/posts",
};

export const apiPosts = {
  /**
   * @param params
   * @returns
   */
  getAll: async (params: PageableRequest): Promise<PageableResponse<Post>> => {
    const response = await api.get<Post[]>(POST_ENDPOINTS.GET_ALL, {
      params,
    });
    return new PageableResponse(response.data, "posts");
  },

  /**
   * @param id
   * @returns
   */
  getById: async (id: number): Promise<Post> => {
    const response = await api.get<Post>(`${POST_ENDPOINTS.GET_BY_ID}/${id}`);
    return response.data;
  },
};
