"use client";

import { PostCard } from "@/components/feature";
import { usePostsWithCommentsAndUser } from "@/shared/hooks/queries/usePosts";
import { FilterFormData } from "@/shared/schemas";

const ListPost = ({ filters }: { filters: FilterFormData }) => {
  const { data: posts } = usePostsWithCommentsAndUser({
    limit: 10,
    skip: 0,
    searchParams: filters,
  });

  return (
    <div className="space-y-6">
      {posts?.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          user={post.user}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default ListPost;
