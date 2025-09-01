"use client";

import { PostCard } from "@/components/feature";
import { usePostsWithCommentsAndUser } from "@/shared/hooks/queries/usePosts";

const ListPost = () => {
  const { data: posts } = usePostsWithCommentsAndUser({ limit: 10, skip: 0 });

  console.log("posts", posts);

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
