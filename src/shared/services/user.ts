import { TUser } from "@/shared/types";
import { api } from "./api";

const USER_ENDPOINTS = {
  GET_BY_ID: "/users",
};

export const apiUsers = {
  /**
   * Get user by ID
   * @param id - User ID
   * @returns User details
   */
  getById: async (id: number): Promise<TUser> => {
    const response = await api.get<TUser>(`${USER_ENDPOINTS.GET_BY_ID}/${id}`);
    return response.data;
  },
};
