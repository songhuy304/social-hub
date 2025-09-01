import { useQuery } from "@tanstack/react-query";
import { apiUsers } from "@/shared/services";

export const useUserById = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => apiUsers.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
