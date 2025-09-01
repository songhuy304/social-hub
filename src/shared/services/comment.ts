import { PageableRequest, PageableResponse } from "@/shared/types/pageable";
import { Comment } from "@/shared/types";
import { api } from "./api";

const COMMENT_ENDPOINTS = {
  GET_BY_POST: "/comments/post",
};

export const apiComments = {
  /**
   * @param params
   * @returns
   */
  getByPost: async (
    params: PageableRequest & { postId: number }
  ): Promise<PageableResponse<Comment>> => {
    const { postId, ...queryParams } = params;
    const response = await api.get<Comment[]>(
      `${COMMENT_ENDPOINTS.GET_BY_POST}/${postId}`,
      {
        params: queryParams,
      }
    );
    return new PageableResponse(response.data, "comments");
  },
};
