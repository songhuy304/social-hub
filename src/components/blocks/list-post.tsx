"use client";

import { PostCard } from "@/components/feature";
import { usePostsWithCommentsAndUser } from "@/shared/hooks/queries/usePosts";
import { FilterFormData } from "@/shared/schemas";
import { useMemo } from "react";

const ListPost = ({ filters }: { filters: FilterFormData }) => {
  const queryString = useMemo(() => {
    const values = Object.values(filters).filter(
      (value) => value && value.trim() !== ""
    );

    return values.join(" ");
  }, [filters]);

  const { data: posts } = usePostsWithCommentsAndUser({
    limit: 10,
    skip: 0,
    q: queryString,
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
