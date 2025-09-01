import { useQuery } from "@tanstack/react-query";
import { PageableRequest } from "@/shared/types/pageable";
import { apiComments, apiPosts, apiUsers } from "@/shared/services";

export const QUERY_KEYS = {
  POSTS: "posts",
  POST_BY_ID: "post",
  POSTS_WITH_COMMENTS_AND_USER: "posts-with-comments-user",
};

export const usePosts = (params: PageableRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS, params],
    queryFn: () => apiPosts.getAll(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const usePostById = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POST_BY_ID, id],
    queryFn: () => apiPosts.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const usePostsWithCommentsAndUser = (params: PageableRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS_WITH_COMMENTS_AND_USER, params],
    queryFn: async () => {
      const postsRes = await apiPosts.getAll(params);

      const posts = postsRes?.getData() ?? [];
      if (posts.length === 0) {
        return { ...postsRes, posts: [] };
      }

      const merged = await Promise.all(
        posts.map(async (post: any) => {
          if (!post?.id) {
            return { ...post, comments: [], user: null };
          }

          const [commentsRes, userRes] = await Promise.all([
            apiComments.getByPost({
              postId: post.id,
              limit: 10,
              skip: 0,
            }),
            post.userId ? apiUsers.getById(post.userId) : Promise.resolve(null),
          ]);

          return {
            ...post,
            comments: commentsRes?.getData() ?? [],
            user: userRes,
          };
        })
      );

      return {
        ...postsRes,
        posts: merged,
      };
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
