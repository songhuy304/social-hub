"use client";

import React from "react";
import { useGetPostsQuery } from "@/shared/reducers";
import { PostCard } from "@/components/feature";

const ListPost = () => {
  const { data: posts } = useGetPostsQuery({ limit: 10, skip: 0 });

  return (
    <div className="space-y-6">
      {posts?.getData().map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPost;
