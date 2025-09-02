import { TUser } from "@/shared/types";
import { api } from "./api";

const USER_ENDPOINTS = {
  GET_BY_ID: "/users",
};

export const apiUsers = {
  getById: async (id: number): Promise<TUser> => {
    const response = await api.get<TUser>(`${USER_ENDPOINTS.GET_BY_ID}/${id}`);
    return response.data;
  },
};
