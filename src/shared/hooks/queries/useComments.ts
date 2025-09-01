import { useQuery } from "@tanstack/react-query";
import { PageableRequest } from "@/shared/types/pageable";
import { apiComments } from "@/shared/services";

export const useCommentsByPost = (
  params: PageableRequest & { postId: number }
) => {
  return useQuery({
    queryKey: ["comments", "post", params.postId, params],
    queryFn: () => apiComments.getByPost(params),
    enabled: !!params.postId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
