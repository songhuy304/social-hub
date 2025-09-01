import { useQuery } from "@tanstack/react-query";
import { PageableRequest } from "@/shared/types/pageable";
import { apiPosts } from "@/shared/services";

export const usePosts = (params: PageableRequest) => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => apiPosts.getAll(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

export const usePostById = (id: number) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => apiPosts.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
