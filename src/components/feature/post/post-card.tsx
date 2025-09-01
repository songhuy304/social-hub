"use client";

import { useState } from "react";

import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
} from "@/components/ui";
import { Comment, PostCardProps } from "@/shared/types";
import { MoreHorizontal, User } from "lucide-react";
import { PostReactions } from "./post-reactions";
import { PostComments } from "./post-comments";

export function PostCard({
  post,
  comments: initialComments = [],
  onLike,
  onCommentLike,
  onAddComment,
  onShare,
  onDonate,
  className = "",
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(post.id);
  };

  const handleCommentLike = (commentId: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          }
        : comment
    );
    setComments(updatedComments);
    onCommentLike?.(commentId);
  };



  const handleShare = () => {
    onShare?.(post.id);
  };

  const handleDonate = () => {
    onDonate?.(post.id);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);
  };

  return (
    <Card
      className={`w-full max-w-2xl mx-auto bg-white shadow-sm ${className}`}
    >
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-purple-600 text-white font-bold">
              <User className="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">
                User {post.userId}
              </h3>
            </div>
            <p className="text-sm text-gray-500">
              Post #{post.id} • {post.views} views
            </p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-4">
        <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
        <p className="text-gray-900 mb-4">{post.body}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex space-x-2 mb-4">
            {post.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-blue-600 border-blue-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <PostReactions
        postId={post.id}
        isLiked={isLiked}
        commentsCount={comments.length}
        reactionsCount={post.reactions.likes + post.reactions.dislikes}
        onLike={handleLike}
        onComment={() => setShowComments(!showComments)}
        onShare={handleShare}
        onDonate={handleDonate}
      />

      {/* Comments Section */}
      {showComments && (
        <PostComments
          comments={comments}
          onAddComment={(content) => {
            const comment: Comment = {
              id: Date.now().toString(),
              author: "Bạn",
              content: content,
              timestamp: "vừa xong",
              likes: 0,
              isLiked: false,
            };
            setComments([...comments, comment]);
            onAddComment?.(content);
          }}
          onCommentLike={handleCommentLike}
        />
      )}
    </Card>
  );
}
