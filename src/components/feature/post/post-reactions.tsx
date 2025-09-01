"use client";

import { Button } from "@/components/ui";
import { Gift, MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";

interface PostReactionsProps {
  postId: string | number;
  isLiked: boolean;
  commentsCount: number;
  reactionsCount: number;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onDonate: () => void;
}

export function PostReactions({
  postId,
  isLiked,
  commentsCount,
  reactionsCount,
  onLike,
  onComment,
  onShare,
  onDonate,
}: PostReactionsProps) {
  return (
    <>
      {/* Reactions Summary */}
      <div className="px-4 py-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <span className="text-lg">👍</span>
              <span className="text-lg">❤️</span>
              <span className="text-lg">😂</span>
            </div>
            <span>{reactionsCount}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{commentsCount} comments</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-2 border-t border-gray-100">
        <div className="grid grid-cols-4 gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLike}
            className={`flex items-center justify-center space-x-2 py-2 ${
              isLiked ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <ThumbsUp className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            <span>Like</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onComment}
            className="flex items-center justify-center space-x-2 py-2 text-gray-600"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onShare}
            className="flex items-center justify-center space-x-2 py-2 text-gray-600"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDonate}
            className="flex items-center justify-center space-x-2 py-2 text-gray-600"
          >
            <Gift className="w-5 h-5" />
            <span>Donate</span>
          </Button>
        </div>
      </div>
    </>
  );
}
